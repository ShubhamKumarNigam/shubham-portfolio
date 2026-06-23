"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { publications } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import PublicationCard from "@/components/PublicationCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [venue, setVenue] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");

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
      "submitted": 0,
      "under-review": 0,
      "accepted": 1,
      "published": 2,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Years</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select value={venue} onChange={(e) => setVenue(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Venues</option>
                {venues.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Statuses</option>
                {statuses.map((s) => (
                  <option key={s} value={s}>{s === "published" ? "Published" : s === "accepted" ? "Accepted" : s === "submitted" ? "Submitted" : "Under Review"}</option>
                ))}
              </select>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title</option>
                <option value="venue">Venue</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Showing <span className="font-semibold text-slate-900 dark:text-slate-100">{filtered.length}</span> of {publications.length} publications
            </p>
            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <X size={14} /> Clear filters
              </button>
            )}
          </div>
        </motion.div>

        <div className="space-y-6">
          {filtered.map((pub, index) => (
            <PublicationCard key={pub.id} pub={pub} index={index + 1} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500 dark:text-slate-500">
              No publications match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
