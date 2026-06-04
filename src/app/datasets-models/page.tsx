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

const typeColors: Record<string, string> = {
  Dataset: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  Model: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
  Tool: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  Benchmark: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
};

const domainColors: Record<string, string> = {
  "Legal AI": "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  "Healthcare AI": "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400",
};

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${typeColors[dm.type]}`}>
                    <Icon size={14} /> {dm.type}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${domainColors[dm.domain]}`}>
                    {dm.domain}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{dm.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{dm.description}</p>

                {hasLinks && (
                  <div className="flex flex-wrap gap-2">
                    {dm.links.github && (
                      <a href={dm.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <Code2 size={12} /> GitHub
                      </a>
                    )}
                    {dm.links.hfDataset && (
                      <a href={dm.links.hfDataset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <Database size={12} /> Dataset
                      </a>
                    )}
                    {dm.links.hfModel && (
                      <a href={dm.links.hfModel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <Cpu size={12} /> Model
                      </a>
                    )}
                    {dm.links.arxiv && (
                      <a href={dm.links.arxiv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
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
