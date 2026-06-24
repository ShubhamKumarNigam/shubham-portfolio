"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Publication } from "@/data/profile";
import {
  BookOpen, FileText, Code2, Database, Cpu, Landmark,
  Copy, Check, ChevronDown, ChevronUp, Sparkles,
  LayoutTemplate, ListChecks
} from "lucide-react";

interface PublicationCardProps {
  pub: Publication;
  index?: number;
}

const linkConfig: Record<string, { icon: React.ElementType; label: string; short: string }> = {
  proceedings: { icon: BookOpen, label: "Proceedings", short: "Proc" },
  anthology: { icon: BookOpen, label: "ACL Anthology", short: "ACL" },
  arxiv: { icon: FileText, label: "arXiv", short: "arXiv" },
  github: { icon: Code2, label: "GitHub", short: "GH" },
  hfResults: { icon: ListChecks, label: "HF Results", short: "HF" },
  hfDataset: { icon: Database, label: "HuggingFace Datasets", short: "HF" },
  hfModel: { icon: Cpu, label: "HuggingFace Models", short: "HF" },
  conference: { icon: Landmark, label: "Conference", short: "Conf" },
  project: { icon: LayoutTemplate, label: "Project Page", short: "Proj" },
};

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Shubham Kumar Nigam");
  if (parts.length === 1) {
    return <span className="text-xs text-ink2 dark:text-ink2-dark break-words">{authors}</span>;
  }
  return (
    <span className="text-xs text-ink2 dark:text-ink2-dark break-words">
      {parts.map((part, i) => (
        <span key={i} className="break-words">
          {part}
          {i < parts.length - 1 && (
            <span className="font-semibold text-accent dark:text-accent-link break-words">Shubham Kumar Nigam</span>
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
    if (key === "proceedings" && links.anthology && links.anthology === url) continue;
    display.push([key, url]);
  }

  return display;
}

function StatusChip({ status }: { status: string }) {
  const label = status === "published" ? "Published" : status === "accepted" ? "Accepted" : status === "submitted" ? "Submitted" : "Under Review";
  const config: Record<string, { text: string; bg: string; border: string; dot: string }> = {
    published: { text: "text-ok", bg: "bg-ok-bg", border: "border-ok-bd", dot: "bg-ok" },
    accepted: { text: "text-signal-text", bg: "bg-[#F6ECDF] dark:bg-[#3D2615]", border: "border-transparent", dot: "bg-signal" },
    submitted: { text: "text-accent dark:text-accent-link", bg: "bg-accent-tint", border: "border-accent-tintbd", dot: "bg-accent dark:bg-accent-link" },
    "under-review": { text: "text-ink2", bg: "bg-paper dark:bg-paper-dark", border: "border-hairline dark:border-hairline-dark", dot: "bg-muted" },
  };
  const style = config[status] ?? config["under-review"];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${style.text} ${style.bg} ${style.border}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {label}
    </span>
  );
}

export default function PublicationCard({ pub, index }: PublicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayLinks = getDisplayLinks(pub.links);
  const hasExpandableContent = !!(pub.abstract) || !!(pub.impact) || !!(pub.bibtexText) || displayLinks.length > 2;

  const copyBibtex = () => {
    if (pub.bibtexText) {
      navigator.clipboard.writeText(pub.bibtexText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Primary = arxiv if present, else first available. Secondary = next available.
  const primaryIndex = displayLinks.findIndex(([k]) => k === "arxiv");
  const ordered = primaryIndex > 0 ? [displayLinks[primaryIndex], ...displayLinks.filter((_, i) => i !== primaryIndex)] : displayLinks;
  const inline = ordered.slice(0, 2);
  const collapsed = ordered.slice(2);

  const chipStyle = "inline-flex items-center gap-1.5 rounded-md border border-accent-tintbd dark:border-accent/30 bg-gradient-to-b from-accent-tint to-accent-tint/70 dark:from-accent/20 dark:to-accent/10 px-3 py-1.5 text-xs font-semibold text-accent dark:text-accent-link hover:from-accent-tint/80 hover:to-accent-tint/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none";

  const linkChip = (key: keyof Publication["links"], url: string) => {
    const cfg = linkConfig[key];
    if (!cfg) return null;
    const Icon = cfg.icon;
    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={chipStyle}
      >
        <Icon size={12} />
        {cfg.label}
      </a>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`group relative overflow-hidden rounded-lg border bg-surface dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow ${pub.featured ? "border-l-2 border-signal" : "border-l-2 border-hairline dark:border-hairline-dark"}`}
    >
      {pub.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-signal/10 dark:bg-signal/20 px-2 py-0.5 text-xs font-medium text-signal">
          <Sparkles size={12} /> Featured
        </div>
      )}

      <div className="p-5 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {typeof index === "number" && (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark text-xs font-heading text-accent dark:text-accent-link">
              {index}
            </span>
          )}
          <span className="inline-flex items-center rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-2 py-0.5 text-xs font-medium text-ink2 dark:text-ink2-dark">
            {pub.year}
          </span>
          <span className="inline-flex items-center rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-2 py-0.5 text-xs font-medium text-ink2 dark:text-ink2-dark">
            {pub.venue}
          </span>
          <StatusChip status={pub.status} />
        </div>

        <h3 className="text-base font-semibold text-ink dark:text-ink-dark leading-snug mb-1 font-heading break-words">
          {pub.title}
        </h3>
        <p className="mb-3 break-words">
          <HighlightedAuthors authors={pub.authors} />
        </p>

        <p className="text-sm text-ink2 dark:text-ink2-dark mb-3 line-clamp-2 break-words overflow-hidden">{pub.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {pub.topic.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-paper dark:bg-paper-dark text-ink2 dark:text-ink2-dark border border-hairline dark:border-hairline-dark">
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
              <div className="pt-3 border-t border-hairline dark:border-hairline-dark mb-3 space-y-3">
                {pub.abstract && (
                  <div>
                    <p className="text-xs font-semibold text-ink dark:text-ink-dark mb-1 uppercase tracking-wide">Abstract</p>
                    <p className="text-sm text-ink2 dark:text-ink2-dark leading-relaxed whitespace-pre-wrap break-words">{pub.abstract}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-ink2 dark:text-ink2-dark break-words">
                    <span className="font-semibold text-ink dark:text-ink-dark">Impact:</span> {pub.impact}
                  </p>
                </div>
                {pub.bibtexText && (
                  <div className="relative mt-3 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-semibold text-ink dark:text-ink-dark uppercase tracking-wide">BibTeX</p>
                      <button
                        onClick={copyBibtex}
                        className="inline-flex items-center gap-1 rounded-md bg-surface dark:bg-surface-dark border border-hairline dark:border-hairline-dark px-2 py-1 text-xs font-medium text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        {copied ? "Copied" : "Copy BibTeX"}
                      </button>
                    </div>
                    <pre className="text-xs bg-ink dark:bg-black p-3 rounded-lg whitespace-pre-wrap break-words text-paper dark:text-paper-dark font-mono border border-hairline dark:border-hairline-dark">
                      {pub.bibtexText}
                    </pre>
                  </div>
                )}
                {!pub.bibtexText && (
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-2.5 py-0.5 text-xs font-medium text-muted">
                      BibTeX coming soon
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap items-center gap-2">
          {inline.map(([key, url]) => linkChip(key, url))}

          {collapsed.map(([key, url]) => linkChip(key, url))}

          {hasExpandableContent && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              {expanded ? "Less" : "Abstract & BibTeX"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
