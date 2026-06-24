"use client";

import { motion } from "framer-motion";
import { datasetsModels } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { Database, Cpu, Wrench, BarChart3, ExternalLink, Code2 } from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  Dataset: Database,
  Model: Cpu,
  Tool: Wrench,
  Benchmark: BarChart3,
};

const chipBase = "inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-2 py-0.5 text-xs font-medium";

export default function DatasetsModelsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Datasets & Models" subtitle="Open-source datasets, models, and tools for research" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasetsModels.map((dm, i) => {
            const Icon = typeIcons[dm.type] || Database;
            const hasLinks = Object.values(dm.links).some((v) => v && v.trim() !== "");

            return (
              <motion.div
                key={dm.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${chipBase} text-ink2 dark:text-ink2-dark`}>
                    <Icon size={14} /> {dm.type}
                  </div>
                  <span className={`${chipBase} text-muted`}>
                    {dm.domain}
                  </span>
                </div>

                <h3 className="font-heading text-lg text-ink dark:text-ink-dark mb-2">{dm.name}</h3>
                <p className="text-sm text-ink2 dark:text-ink2-dark mb-4 leading-relaxed">{dm.description}</p>

                {hasLinks && (
                  <div className="flex flex-wrap gap-2">
                    {dm.links.github && (
                      <a href={dm.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                        <Code2 size={12} /> GitHub
                      </a>
                    )}
                    {dm.links.hfDataset && (
                      <a href={dm.links.hfDataset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                        <Database size={12} /> Dataset
                      </a>
                    )}
                    {dm.links.hfModel && (
                      <a href={dm.links.hfModel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                        <Cpu size={12} /> Model
                      </a>
                    )}
                    {dm.links.arxiv && (
                      <a href={dm.links.arxiv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                        <ExternalLink size={12} /> arXiv
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
