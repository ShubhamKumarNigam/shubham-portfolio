"use client";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import MetricCard from "@/components/MetricCard";
import ResearchCard from "@/components/ResearchCard";
import PublicationCard from "@/components/PublicationCard";
import ProjectCard from "@/components/ProjectCard";
import VisitorCounter from "@/components/VisitorCounter";
import { publications, projects, researchAreas, news, datasetsModels, achievements, talks } from "@/data/profile";
import { FileText, Database, Cpu, Mic, Award, FolderOpen, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featuredPubs = publications.filter((p) => p.featured).slice(0, 4);
  const featuredProjIds = ["proj-1", "proj-4", "proj-5", "proj-6"];
  const featuredProjs = featuredProjIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as typeof projects;

  const metrics = [
    { icon: FileText, value: publications.length, label: "Publications" },
    { icon: Database, value: datasetsModels.length, label: "Datasets & Models" },
    { icon: Mic, value: talks.length, label: "Invited Talks" },
    { icon: Award, value: achievements.length, label: "Awards & Honors" },
    { icon: FolderOpen, value: projects.length, label: "Projects" },
  ];

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Metrics */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <VisitorCounter />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} icon={m.icon} value={m.value} label={m.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Research Areas" subtitle="Exploring the frontiers of AI for Law, Healthcare, and Society" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => (
              <ResearchCard key={area.id} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Featured Publications</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
            <Link href="/publications/" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-6">
            {featuredPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/publications/" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              View all publications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Featured Projects</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
            <Link href="/projects/" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjs.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* News / Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Recent News" subtitle="Highlights from research, awards, and academic milestones" />
          <div className="max-w-3xl mx-auto space-y-6">
            {news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Calendar size={18} />
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 flex-1 shadow-sm">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{item.date}</span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            I am always open to research collaborations, PhD supervision discussions, invited talks, and industry partnerships in Core AI/ML, Legal AI, and Healthcare AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/publications/" className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Browse Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
