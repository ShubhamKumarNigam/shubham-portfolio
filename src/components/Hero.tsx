"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, Mail, Globe } from "lucide-react";
import { GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl dark:bg-blue-600/10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl dark:bg-cyan-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl dark:bg-amber-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Research Fellow @ University of Birmingham Dubai
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight font-heading">
              Advancing{" "}
              <span className="gradient-text">Responsible, Scalable,</span> and{" "}
              <span className="gradient-text">Interpretable AI</span> across Core ML, Law, and Healthcare
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Research Fellow at University of Birmingham Dubai | Core AI/ML | LLMs | Legal AI | Healthcare AI | Explainable AI | Multilingual AI
            </p>

            <p className="mt-4 text-base text-slate-500 dark:text-slate-500 max-w-xl">
              Dr. Shubham Kumar Nigam is a researcher advancing AI memory management, distributed training, test-time training, efficient LLM systems, reasoning, agents, and evaluation—alongside specialized work in Legal AI and Healthcare AI. His work focuses on building transparent, factual, and responsible AI systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/publications/"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                View Publications <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <Mail size={16} /> Contact Me
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href={profile.socials.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Google Sites">
                <Globe size={22} />
              </a>
              <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" aria-label="Google Scholar">
                <GoogleScholarIcon size={22} />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
                <GitHubIcon size={22} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon size={22} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors" aria-label="X / Twitter">
                <XIcon size={22} />
              </a>
              <a href={profile.socials.huggingfaceOrg} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors" aria-label="HuggingFace">
                <HuggingFaceIcon size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-25 blur-xl dark:opacity-15" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10">
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
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-slate-700"><span class="text-5xl font-bold text-blue-600 dark:text-blue-400">${profile.initials}</span></div>`;
                    }
                  }}
                />
              </div>

              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-blue-300/40 dark:border-blue-600/20 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-cyan-300/40 dark:border-cyan-600/20 rounded-bl-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
