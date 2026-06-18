"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Publication } from "@/data/profile";
import PosterGraphic from "./posters/PosterGraphic";
import {
  BookOpen, FileText, Code2, Database, Cpu, Landmark,
  Copy, Check, ChevronDown, ChevronUp, Sparkles, Presentation,
  Image as ImageIcon, Globe, LayoutTemplate, ListChecks
} from "lucide-react";

interface PublicationCardProps {
  pub: Publication;
}

const linkConfig: Record<string, { icon: React.ElementType; color: string; darkColor: string; hover: string; darkHover: string }> = {
  proceedings: {
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    darkColor: "dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800",
    hover: "hover:bg-emerald-100 hover:text-emerald-800",
    darkHover: "dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300",
  },
  anthology: {
    icon: Globe,
    color: "bg-sky-50 text-sky-700 border-sky-200",
    darkColor: "dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-800",
    hover: "hover:bg-sky-100 hover:text-sky-800",
    darkHover: "dark:hover:bg-sky-900/30 dark:hover:text-sky-300",
  },
  arxiv: {
    icon: FileText,
    color: "bg-red-50 text-red-700 border-red-200",
    darkColor: "dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
    hover: "hover:bg-red-100 hover:text-red-800",
    darkHover: "dark:hover:bg-red-900/30 dark:hover:text-red-300",
  },
  github: {
    icon: Code2,
    color: "bg-slate-100 text-slate-700 border-slate-300",
    darkColor: "dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600",
    hover: "hover:bg-slate-200 hover:text-slate-800",
    darkHover: "dark:hover:bg-slate-700 dark:hover:text-slate-200",
  },
  hfDataset: {
    icon: Database,
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    darkColor: "dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
    hover: "hover:bg-yellow-100 hover:text-yellow-800",
    darkHover: "dark:hover:bg-yellow-900/30 dark:hover:text-yellow-300",
  },
  hfModel: {
    icon: Cpu,
    color: "bg-orange-50 text-orange-700 border-orange-200",
    darkColor: "dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
    hover: "hover:bg-orange-100 hover:text-orange-800",
    darkHover: "dark:hover:bg-orange-900/30 dark:hover:text-orange-300",
  },
  hfResults: {
    icon: ListChecks,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    darkColor: "dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800",
    hover: "hover:bg-amber-100 hover:text-amber-800",
    darkHover: "dark:hover:bg-amber-900/30 dark:hover:text-amber-300",
  },
  conference: {
    icon: Landmark,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    darkColor: "dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800",
    hover: "hover:bg-indigo-100 hover:text-indigo-800",
    darkHover: "dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300",
  },
  project: {
    icon: LayoutTemplate,
    color: "bg-violet-50 text-violet-700 border-violet-200",
    darkColor: "dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800",
    hover: "hover:bg-violet-100 hover:text-violet-800",
    darkHover: "dark:hover:bg-violet-900/30 dark:hover:text-violet-300",
  },
  slides: {
    icon: Presentation,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    darkColor: "dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800",
    hover: "hover:bg-cyan-100 hover:text-cyan-800",
    darkHover: "dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300",
  },
  poster: {
    icon: ImageIcon,
    color: "bg-pink-50 text-pink-700 border-pink-200",
    darkColor: "dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800",
    hover: "hover:bg-pink-100 hover:text-pink-800",
    darkHover: "dark:hover:bg-pink-900/30 dark:hover:text-pink-300",
  },
};

const linkLabels: Record<string, string> = {
  proceedings: "Proceedings",
  anthology: "ACL Anthology",
  arxiv: "arXiv",
  github: "GitHub",
  hfResults: "HF Results",
  hfDataset: "HuggingFace Datasets",
  hfModel: "HuggingFace Models",
  conference: "Conference",
  project: "Project Page",
  slides: "Slides",
  poster: "Poster",
};

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Shubham Kumar Nigam");
  if (parts.length === 1) {
    return <span className="text-xs text-slate-500 dark:text-slate-500 break-words">{authors}</span>;
  }
  return (
    <span className="text-xs text-slate-500 dark:text-slate-500 break-words">
      {parts.map((part, i) => (
        <span key={i} className="break-words">
          {part}
          {i < parts.length - 1 && (
            <span className="font-bold text-blue-600 dark:text-blue-400 break-words">Shubham Kumar Nigam</span>
          )}
        </span>
      ))}
    </span>
  );
}

/** Filter duplicate buttons when Proceedings and Anthology share the same URL. */
function getDisplayLinks(links: Publication["links"]) {
  const entries = Object.entries(links) as [keyof Publication["links"], string][];
  const display: [keyof Publication["links"], string][] = [];

  for (const [key, url] of entries) {
    if (!url || url.trim() === "") continue;

    // If proceedings URL equals anthology URL, skip proceedings (prefer ACL Anthology label)
    if (key === "proceedings" && links.anthology && links.anthology === url) {
      continue;
    }

    display.push([key, url]);
  }

  return display;
}

export default function PublicationCard({ pub }: PublicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayLinks = getDisplayLinks(pub.links);
  const hasExpandableContent = !!(pub.abstract) || !!(pub.impact) || !!(pub.bibtexText);

  const copyBibtex = () => {
    if (pub.bibtexText) {
      navigator.clipboard.writeText(pub.bibtexText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const linkButton = (key: keyof Publication["links"], url: string) => {
    const cfg = linkConfig[key];
    if (!cfg) return null;
    const Icon = cfg.icon;
    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${cfg.color} ${cfg.darkColor} ${cfg.hover} ${cfg.darkHover}`}
      >
        <Icon size={12} />
        {linkLabels[key] || key}
      </a>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
    >
      {pub.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
          <Sparkles size={12} /> Featured
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 h-40 md:h-auto shrink-0">
          <PosterGraphic type={pub.posterType as any} title={pub.title} className="w-full h-full rounded-none md:rounded-l-2xl md:rounded-tr-none" />
        </div>

        <div className="flex-1 p-5 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400">
              {pub.year}
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              {pub.venue}
            </span>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              pub.status === "published"
                ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400"
                : pub.status === "accepted"
                ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}>
              {pub.status === "published" ? "Published" : pub.status === "accepted" ? "Accepted" : pub.status === "submitted" ? "Submitted" : "Under Review"}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug mb-1 font-heading break-words">
            {pub.title}
          </h3>
          <p className="mb-3 break-words">
            <HighlightedAuthors authors={pub.authors} />
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2 break-words overflow-hidden">{pub.summary}</p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {pub.topic.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mb-3 space-y-3">
                  {pub.abstract && (
                    <div>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">Abstract</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap break-words">{pub.abstract}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 break-words">
                      <span className="font-semibold">Impact:</span> {pub.impact}
                    </p>
                  </div>
                  {pub.bibtexText && (
                    <div className="relative mt-3 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">BibTeX</p>
                        <button
                          onClick={copyBibtex}
                          className="inline-flex items-center gap-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                          {copied ? "Copied" : "Copy BibTeX"}
                        </button>
                      </div>
                      <pre className="text-xs bg-slate-50 dark:bg-slate-950 p-3 rounded-lg whitespace-pre-wrap break-words text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        {pub.bibtexText}
                      </pre>
                    </div>
                  )}
                  {!pub.bibtexText && (
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        BibTeX coming soon
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-2">
            {displayLinks.map(([key, url]) => linkButton(key, url))}

            {hasExpandableContent && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                {expanded ? "Less" : "More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
