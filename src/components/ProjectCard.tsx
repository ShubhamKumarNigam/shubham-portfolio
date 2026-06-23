"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/profile";
import PosterGraphic from "./posters/PosterGraphic";
import { ExternalLink, Code2, Database, Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Object.values(project.links).some((v) => v && v.trim() !== "");

  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="h-28 w-full">
        <PosterGraphic type={project.posterType as any} title={project.name} className="w-full h-full rounded-none" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{project.name}</h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">Problem:</span> {project.problem}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">Method:</span> {project.method}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">Impact:</span> {project.impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-2">
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <ExternalLink size={12} /> Website
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Code2 size={12} /> GitHub
              </a>
            )}
            {project.links.hfDataset && (
              <a href={project.links.hfDataset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Database size={12} /> Dataset
              </a>
            )}
            {project.links.hfModel && (
              <a href={project.links.hfModel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Cpu size={12} /> Model
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
