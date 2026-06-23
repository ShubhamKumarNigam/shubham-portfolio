"use client";

import { motion } from "framer-motion";
import { WorkingProject } from "@/data/profile";
import PosterGraphic from "./posters/PosterGraphic";

interface WorkingProjectCardProps {
  project: WorkingProject;
}

const statusColors: Record<string, string> = {
  Ongoing: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
  "Under Review": "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  "In Progress": "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  Prototype: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
  Collaboration: "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400",
};

export default function WorkingProjectCard({ project }: WorkingProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="h-28 w-full">
        <PosterGraphic type={project.posterType as any} title={project.title} className="w-full h-full rounded-none" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 pr-2">{project.title}</h3>
          <span className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status] || statusColors["In Progress"]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.description}</p>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-medium">Objective:</span> {project.objective}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-medium">Expected Impact:</span> {project.expectedImpact}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${project.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
