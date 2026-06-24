"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/profile";
import { ExternalLink, Code2, Database, Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Object.values(project.links).some((v) => v && v.trim() !== "");

  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-20 w-full bg-accent-tint border-b border-accent-tintbd overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
          <div className="w-32 h-32 rounded-full border border-accent/10" />
          <div className="absolute w-44 h-44 rounded-full border border-accent/10" />
          <div className="absolute w-56 h-56 rounded-full border border-accent/10" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-between px-5">
          <h3 className="font-heading text-lg text-accent dark:text-accent-link">{project.name}</h3>
          {project.publications.length > 0 && (
            <span className="inline-flex items-center rounded-full bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-2 py-0.5 text-xs font-medium text-ink2 dark:text-ink2-dark">
              {project.publications.length} paper{project.publications.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="space-y-2 mb-4">
          <p className="text-sm text-ink2 dark:text-ink2-dark">
            <span className="font-medium text-ink dark:text-ink-dark">Problem:</span> {project.problem}
          </p>
          <p className="text-sm text-ink2 dark:text-ink2-dark">
            <span className="font-medium text-ink dark:text-ink-dark">Method:</span> {project.method}
          </p>
          <p className="text-sm text-ink2 dark:text-ink2-dark">
            <span className="font-medium text-ink dark:text-ink-dark">Impact:</span> {project.impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark text-ink2 dark:text-ink2-dark">
              {tag}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-2">
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                <ExternalLink size={12} /> Website
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                <Code2 size={12} /> GitHub
              </a>
            )}
            {project.links.hfDataset && (
              <a href={project.links.hfDataset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                <Database size={12} /> Dataset
              </a>
            )}
            {project.links.hfModel && (
              <a href={project.links.hfModel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark px-3 py-1.5 text-xs font-medium text-ink2 dark:text-ink2-dark hover:bg-accent-tint hover:border-accent-tintbd hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                <Cpu size={12} /> Model
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
