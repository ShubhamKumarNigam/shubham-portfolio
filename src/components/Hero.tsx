"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile, publications, datasetsModels, talks, achievements, projects } from "@/data/profile";
import { ArrowRight, Globe } from "lucide-react";
import {
  GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon,
  DBLPIcon, ORCIDIcon, SemanticScholarIcon, ACLAnthologyIcon, ScopusIcon, ResearchGateIcon, ArXivIcon,
} from "@/components/SocialIcons";

export default function Hero() {
  const stats = [
    { value: publications.length, label: "Publications" },
    { value: datasetsModels.length, label: "Datasets & Models" },
    { value: talks.length, label: "Invited Talks" },
    { value: achievements.length, label: "Awards & Honors" },
    { value: projects.length, label: "Projects" },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="absolute inset-0 bg-paper dark:bg-paper-dark" />
      <div
        className="absolute inset-0 bg-[linear-gradient(#0000000a_1px,transparent_1px),linear-gradient(90deg,#0000000a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md bg-accent-tint border border-accent-tintbd text-accent px-3 py-1.5 text-sm font-medium mb-6">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              Research Fellow @ University of Birmingham Dubai
            </div>

            <h1 className="font-heading font-normal text-5xl md:text-6xl text-ink dark:text-ink-dark leading-[1.04]">
              Advancing{" "}
              <span className="italic text-accent dark:text-accent-link">Responsible, Scalable,</span>{" "}
              and Interpretable AI across Core ML, Law, and Healthcare
            </h1>

            <p className="mt-6 text-lg text-ink2 dark:text-ink2-dark max-w-xl">
              Research Fellow at University of Birmingham Dubai | Core AI/ML | LLMs | Legal AI | Healthcare AI | Explainable AI | Multilingual AI
            </p>

            <p className="mt-4 text-base text-muted max-w-xl">
              Dr. Shubham Kumar Nigam is a researcher advancing AI memory management, distributed training, test-time training, efficient LLM systems, reasoning, agents, and evaluation—alongside specialized work in Legal AI and Healthcare AI. His work focuses on building transparent, factual, and responsible AI systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/publications/"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1"
              >
                View Publications <ArrowRight size={16} />
              </Link>
              <span className="h-4 border-l border-hairline dark:border-hairline-dark" />
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1"
              >
                Explore Projects
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative w-64 md:w-72 lg:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-hairline bg-surface dark:bg-surface-dark shadow-sm">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-hairline dark:bg-hairline-dark"><span class="text-5xl font-heading text-ink dark:text-ink-dark">${profile.initials}</span></div>`;
                  }
                }}
              />
            </div>

            <div className="w-64 md:w-72 lg:w-80 rounded-lg border border-hairline bg-surface dark:bg-surface-dark p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Recent honours</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-ink2 dark:text-ink2-dark">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                  <span>Best Paper Award – Bridge between AI and Law @ AAAI 2026</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-ink2 dark:text-ink2-dark">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                  <span>DAAD Postdoc-NeT-AI Fellow</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-ink2 border-t border-hairline dark:border-hairline-dark pt-6">
            {stats.map((s) => (
              <span key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-heading text-lg text-ink dark:text-ink-dark">{s.value}</span>
                <span className="text-sm">{s.label}</span>
              </span>
            ))}
            <span className="self-center h-3 border-l border-hairline dark:border-hairline-dark" />
            <span className="text-sm text-muted dark:text-muted-dark">ACL · NAACL · EMNLP · COLING · ICAIL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
