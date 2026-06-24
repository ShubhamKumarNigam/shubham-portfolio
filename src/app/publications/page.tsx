"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { publications } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import PublicationCard from "@/components/PublicationCard";
import { Search, SlidersHorizontal, X, LayoutGrid, List } from "lucide-react";

const shortLabels: Record<string, string> = {
  proceedings: "Proc",
  anthology: "ACL",
  arxiv: "arXiv",
  github: "GH",
  hfResults: "HF",
  hfDataset: "HF",
  hfModel: "HF",
  conference: "Conf",
  project: "Proj",
};

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [venue, setVenue] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"cards" | "list">("cards");

  const years = useMemo(() => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a), []);
  const venues = useMemo(() => [...new Set(publications.map((p) => p.venue))].sort(), []);
  const topics = useMemo(() => [...new Set(publications.flatMap((p) => p.topic))].sort(), []);
  const types = useMemo(() => [...new Set(publications.map((p) => p.type))].sort(), []);
  const statuses = useMemo(() => [...new Set(publications.map((p) => p.status))].sort(), []);

  const filtered = useMemo(() => {
    let result = publications.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.authors.toLowerCase().includes(search.toLowerCase()) ||
        p.venue.toLowerCase().includes(search.toLowerCase());
      const matchesYear = year === "" || p.year.toString() === year;
      const matchesVenue = venue === "" || p.venue === venue;
      const matchesTopic = topic === "" || p.topic.includes(topic);
      const matchesType = type === "" || p.type === type;
      const matchesStatus = status === "" || p.status === status;
      return matchesSearch && matchesYear && matchesVenue && matchesTopic && matchesType && matchesStatus;
    });

    const statusOrder: Record<string, number> = {
      submitted: 0,
      "under-review": 0,
      accepted: 1,
      published: 2,
    };

    result.sort((a, b) => {
      if (sort === "newest") {
        const statusDiff = (statusOrder[a.status] ?? 3) - (statusOrder[b.status] ?? 3);
        if (statusDiff !== 0) return statusDiff;
        return b.year - a.year || b.title.localeCompare(a.title);
      }
      if (sort === "oldest") return a.year - b.year || a.title.localeCompare(b.title);
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "venue") return a.venue.localeCompare(b.venue);
      if (sort === "type") return a.type.localeCompare(b.type);
      return 0;
    });

    return result;
  }, [search, year, venue, topic, type, status, sort]);

  const activeFilters = [year, venue, topic, type, status].filter(Boolean).length;

  const clearFilters = () => {
    setSearch("");
    setYear("");
    setVenue("");
    setTopic("");
    setType("");
    setStatus("");
    setSort("newest");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Publications" subtitle="Peer-reviewed research in Legal AI, NLP, and Healthcare AI" />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-5 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark pl-9 pr-4 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Years</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select value={venue} onChange={(e) => setVenue(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Venues</option>
                {venues.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">All Statuses</option>
                {statuses.map((s) => (
                  <option key={s} value={s}>{s === "published" ? "Published" : s === "accepted" ? "Accepted" : s === "submitted" ? "Submitted" : "Under Review"}</option>
                ))}
              </select>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark px-3 py-2.5 text-sm text-ink dark:text-ink-dark focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title</option>
                <option value="venue">Venue</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-ink2 dark:text-ink2-dark">
              Showing <span className="font-semibold text-ink dark:text-ink-dark">{filtered.length}</span> of {publications.length} publications
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark p-0.5">
                <button
                  onClick={() => setView("cards")}
                  className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${view === "cards" ? "bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link" : "text-ink2 hover:text-ink"}`}
                  aria-label="Card view"
                >
                  <LayoutGrid size={14} /> Cards
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${view === "list" ? "bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link" : "text-ink2 hover:text-ink"}`}
                  aria-label="List view"
                >
                  <List size={14} /> List
                </button>
              </div>
              {activeFilters > 0 && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-sm text-accent dark:text-accent-link hover:underline"
                >
                  <X size={14} /> Clear filters
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {view === "cards" ? (
          <div className="space-y-6">
            {filtered.map((pub, index) => (
              <PublicationCard key={pub.id} pub={pub} index={index + 1} />
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted">
                No publications match your filters.
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark shadow-sm overflow-hidden">
            {filtered.map((pub, index) => {
              const links = Object.entries(pub.links).filter(([, url]) => !!url) as [string, string][];
              return (
                <div
                  key={pub.id}
                  className="flex items-start gap-4 px-5 py-4 border-b border-hairline dark:border-hairline-dark last:border-b-0 hover:bg-paper/50 dark:hover:bg-paper-dark/50 transition-colors"
                >
                  <span className="font-heading text-2xl text-accent dark:text-accent-link w-10 shrink-0 pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg text-ink dark:text-ink-dark leading-snug break-words">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-ink2 dark:text-ink2-dark mt-1 break-words">
                      {pub.authors} · {pub.venue} · {pub.year}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {links.map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-accent dark:text-accent-link hover:underline"
                        >
                          {shortLabels[key] || key}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted">
                No publications match your filters.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
