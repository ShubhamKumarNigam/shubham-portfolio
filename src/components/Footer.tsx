"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { Code2, Users, MessageCircle, BookOpen, ExternalLink } from "lucide-react";

function HuggingFaceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 2.5c-1.1 0-2 .9-2 2v.6c-.5-.3-1.1-.5-1.7-.5-1.8 0-3.3 1.5-3.3 3.3 0 .4.1.7.2 1.1-.7.3-1.2 1-1.2 1.9 0 .6.3 1.2.7 1.5-.4.5-.7 1.2-.7 1.9 0 1.5 1.2 2.7 2.7 2.7h.4c-.3.5-.5 1.1-.5 1.7 0 1.8 1.5 3.3 3.3 3.3.6 0 1.2-.2 1.7-.5v.6c0 1.1.9 2 2 2s2-.9 2-2v-.6c.5.3 1.1.5 1.7.5 1.8 0 3.3-1.5 3.3-3.3 0-.6-.2-1.2-.5-1.7h.4c1.5 0 2.7-1.2 2.7-2.7 0-.7-.3-1.4-.7-1.9.4-.4.7-.9.7-1.5 0-.9-.5-1.6-1.2-1.9.1-.3.2-.7.2-1.1 0-1.8-1.5-3.3-3.3-3.3-.6 0-1.2.2-1.7.5v-.6c0-1.1-.9-2-2-2zm0 1.2c.4 0 .8.4.8.8v1.5c0 .2-.1.4-.3.5-.2.1-.4.1-.6 0-.2-.1-.3-.3-.3-.5V4.5c0-.4.4-.8.8-.8zm-3.7 2.3c1.2 0 2.1.9 2.1 2.1 0 .3-.1.5-.2.8-.1.2-.3.4-.5.5-.2.1-.5.2-.8.2-.3 0-.5-.1-.8-.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-1.2.9-2.1 2.1-2.1zm7.4 0c1.2 0 2.1.9 2.1 2.1 0 .3-.1.5-.2.8-.1.2-.3.4-.5.5-.2.1-.5.2-.8.2-.3 0-.5-.1-.8-.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-1.2.9-2.1 2.1-2.1zM8.8 11c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm6.4 0c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm-7.5 4.3c.6-.3 1.3-.4 2-.4h1.6c.7 0 1.4.1 2 .4.6.3 1.1.7 1.5 1.2.4.5.6 1.1.6 1.7 0 .6-.2 1.2-.6 1.7-.4.5-.9.9-1.5 1.2-.6.3-1.3.4-2 .4H9.7c-.7 0-1.4-.1-2-.4-.6-.3-1.1-.7-1.5-1.2-.4-.5-.6-1.1-.6-1.7 0-.6.2-1.2.6-1.7.4-.5.9-.9 1.5-1.2z"/>
    </svg>
  );
}

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
              <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" aria-label="Google Scholar">
                <BookOpen size={20} />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" aria-label="GitHub">
                <Code2 size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Users size={20} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="Twitter">
                <MessageCircle size={20} />
              </a>
              <a href={profile.socials.huggingfaceOrg} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors" aria-label="HuggingFace">
                <HuggingFaceIcon size={20} />
              </a>
              <a href={profile.socials.university} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="University">
                <ExternalLink size={20} />
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
