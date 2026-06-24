"use client";

import { motion } from "framer-motion";
import { ResearchArea } from "@/data/profile";

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

export default function ResearchCard({ area, index }: ResearchCardProps) {
  const count = area.publications?.length ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex items-start justify-between gap-6 py-5 border-b border-hairline dark:border-hairline-dark last:border-b-0"
    >
      <div className="flex items-start gap-4 min-w-0">
        <span className="font-heading text-2xl text-accent dark:text-accent-link w-8 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="font-heading text-lg text-ink dark:text-ink-dark leading-snug">
            {area.title}
          </h3>
          <p className="text-sm text-ink2 dark:text-ink2-dark mt-1 leading-relaxed">
            {area.description}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col items-end gap-1 shrink-0 pt-1">
        <span className="font-mono text-lg text-ink dark:text-ink-dark">{count}</span>
        <span className="text-xs text-muted">papers</span>
      </div>
    </motion.div>
  );
}
