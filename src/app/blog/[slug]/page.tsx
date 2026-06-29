import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPublishedPosts, getPostBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post || !post.published) {
    return { title: "Post not found" };
  }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-sm text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link transition-colors mb-6 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted dark:text-muted-dark mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-ink dark:text-ink-dark leading-tight">
            {post.title}
          </h1>

          {post.coverImage && (
            <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-accent-tint border border-accent-tintbd px-2 py-0.5 text-xs font-medium text-accent dark:text-accent-link"
              >
                <Tag size={11} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article
          className="blog-post space-y-5 [&_h2]:font-heading [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:text-ink dark:[&_h2]:text-ink-dark [&_h2]:pt-4 [&_h2]:pb-1 [&_p]:text-ink2 dark:[&_p]:text-ink2-dark [&_p]:leading-relaxed [&_a]:text-accent dark:[&_a]:text-accent-link [&_a]:no-underline hover:[&_a]:underline [&_strong]:text-ink dark:[&_strong]:text-ink-dark [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:text-ink2 dark:[&_ul]:text-ink2-dark [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:text-ink2 dark:[&_ol]:text-ink2-dark [&_li]:marker:text-accent dark:[&_li]:marker:text-accent-link"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-hairline dark:border-hairline-dark">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
          >
            <ArrowLeft size={16} /> Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
