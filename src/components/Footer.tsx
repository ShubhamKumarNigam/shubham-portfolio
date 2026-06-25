"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { ExternalLink, Globe } from "lucide-react";
import {
  GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon,
  DBLPIcon, ORCIDIcon, SemanticScholarIcon, ACLAnthologyIcon, ScopusIcon, ResearchGateIcon, ArXivIcon,
} from "@/components/SocialIcons";
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
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { href: profile.socials.website, icon: Globe, label: "Google Sites" },
                { href: profile.socials.googleScholar, icon: GoogleScholarIcon, label: "Google Scholar" },
                { href: profile.socials.dblp, icon: DBLPIcon, label: "DBLP" },
                { href: profile.socials.orcid, icon: ORCIDIcon, label: "ORCID" },
                { href: profile.socials.semanticScholar, icon: SemanticScholarIcon, label: "Semantic Scholar" },
                { href: profile.socials.aclAnthology, icon: ACLAnthologyIcon, label: "ACL Anthology" },
                { href: profile.socials.scopus, icon: ScopusIcon, label: "Scopus" },
                { href: profile.socials.researchGate, icon: ResearchGateIcon, label: "ResearchGate" },
                { href: profile.socials.arxiv, icon: ArXivIcon, label: "arXiv" },
                { href: profile.socials.github, icon: GitHubIcon, label: "GitHub" },
                { href: profile.socials.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                { href: profile.socials.twitter, icon: XIcon, label: "X / Twitter" },
                { href: profile.socials.huggingfaceOrg, icon: HuggingFaceIcon, label: "HuggingFace" },
                { href: profile.socials.university, icon: ExternalLink, label: "University" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
                  aria-label={item.label}
                >
                  <item.icon size={24} />
                </a>
              ))}
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
