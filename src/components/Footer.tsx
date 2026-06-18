"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { ExternalLink, Globe } from "lucide-react";
import { GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-heading">
              Dr. Shubham Kumar Nigam
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Research Fellow at University of Birmingham Dubai. Advancing Responsible, Scalable, and Interpretable AI across Core ML, Law, and Healthcare.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/publications/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Publications</Link></li>
              <li><Link href="/projects/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
              <li><Link href="/research/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Research</Link></li>
              <li><Link href="/contact/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Connect
            </h4>
            <div className="mt-3 flex gap-3">
              <a href={profile.socials.website} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Google Sites">
                <Globe size={22} />
              </a>
              <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" aria-label="Google Scholar">
                <GoogleScholarIcon size={22} />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" aria-label="GitHub">
                <GitHubIcon size={22} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon size={22} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" aria-label="X / Twitter">
                <XIcon size={22} />
              </a>
              <a href={profile.socials.huggingfaceOrg} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors" aria-label="HuggingFace">
                <HuggingFaceIcon size={22} />
              </a>
              <a href={profile.socials.university} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="University">
                <ExternalLink size={22} />
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {profile.email}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Dr. Shubham Kumar Nigam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
