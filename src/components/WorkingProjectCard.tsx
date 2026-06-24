"use client";

import { motion } from "framer-motion";
import { WorkingProject } from "@/data/profile";

interface WorkingProjectCardProps {
  project: WorkingProject;
}

export default function WorkingProjectCard({ project }: WorkingProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg border border-dashed border-muted bg-[#FCFBF7] dark:bg-surface-dark shadow-sm"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3 gap-3">
          <h3 className="font-heading text-base text-ink dark:text-ink-dark pr-2">{project.title}</h3>
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-signal-text bg-[#F6ECDF] dark:bg-[#3D2615]">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {project.status}
          </span>
        </div>

        <p className="text-sm text-ink2 dark:text-ink2-dark mb-3">{project.description}</p>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-ink2 dark:text-ink2-dark">
            <span className="font-medium text-ink dark:text-ink-dark">Objective:</span> {project.objective}
          </p>
          <p className="text-sm text-ink2 dark:text-ink2-dark">
            <span className="font-medium text-ink dark:text-ink-dark">Expected Impact:</span> {project.expectedImpact}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-muted mb-1">
            <span>Progress</span>
            <span className="font-mono">{project.progress}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-hairline dark:bg-hairline-dark overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${project.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full rounded-full bg-accent"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark text-ink2 dark:text-ink2-dark">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
