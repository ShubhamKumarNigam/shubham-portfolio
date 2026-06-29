"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getPublishedPosts } from "@/data/blog";
import SectionTitle from "@/components/SectionTitle";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Blog" subtitle="Thoughts on AI, research, and technology" />

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted dark:text-muted-dark mb-3">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="font-heading text-xl md:text-2xl text-ink dark:text-ink-dark leading-snug group-hover:text-accent dark:group-hover:text-accent-link transition-colors">
                <Link href={`/blog/${post.slug}/`} className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-base text-ink2 dark:text-ink2-dark leading-relaxed">
                {post.excerpt}
              </p>

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

              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
                >
                  Read article <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-16 text-muted dark:text-muted-dark">
              <p>No blog posts published yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
