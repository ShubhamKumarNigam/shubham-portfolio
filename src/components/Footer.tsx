"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { ExternalLink, Globe } from "lucide-react";
import { GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/SocialIcons";
import { BrandMark } from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <BrandMark showSubtitle={false} />
            <p className="mt-3 text-sm text-ink2 dark:text-ink2-dark">
              Research Fellow at University of Birmingham Dubai. Advancing Responsible, Scalable, and Interpretable AI across Core ML, Law, and Healthcare.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-ink dark:text-ink-dark uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/publications/" className="text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">Publications</Link></li>
              <li><Link href="/projects/" className="text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">Projects</Link></li>
              <li><Link href="/research/" className="text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">Research</Link></li>
              <li><Link href="/contact/" className="text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-ink dark:text-ink-dark uppercase tracking-wider">
              Connect
            </h4>
            <div className="mt-3 flex gap-3">
              <a href={profile.socials.website} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="Google Sites">
                <Globe size={22} />
              </a>
              <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="Google Scholar">
                <GoogleScholarIcon size={22} />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="GitHub">
                <GitHubIcon size={22} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="LinkedIn">
                <LinkedInIcon size={22} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="X / Twitter">
                <XIcon size={22} />
              </a>
              <a href={profile.socials.huggingfaceOrg} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="HuggingFace">
                <HuggingFaceIcon size={22} />
              </a>
              <a href={profile.socials.university} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded" aria-label="University">
                <ExternalLink size={22} />
              </a>
            </div>
            <p className="mt-3 text-sm text-ink2 dark:text-ink2-dark">
              {profile.email}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-hairline dark:border-hairline-dark text-center text-sm text-muted">
          © {new Date().getFullYear()} Dr. Shubham Kumar Nigam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
