"use client";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import MetricCard from "@/components/MetricCard";
import ResearchCard from "@/components/ResearchCard";
import PublicationCard from "@/components/PublicationCard";
import ProjectCard from "@/components/ProjectCard";
import VisitorCounter from "@/components/VisitorCounter";
import { publications, projects, researchAreas, news, datasetsModels, achievements, talks } from "@/data/profile";
import { FileText, Database, Mic, Award, FolderOpen, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featuredPubs = publications.filter((p) => p.featured).slice(0, 4);
  const featuredProjIds = ["proj-1", "proj-4", "proj-5", "proj-6"];
  const featuredProjs = featuredProjIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as typeof projects;
  const sortedResearchAreas = [...researchAreas].sort((a, b) => (b.publications?.length ?? 0) - (a.publications?.length ?? 0));

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
      <section className="py-16 bg-paper dark:bg-paper-dark border-y border-hairline dark:border-hairline-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <VisitorCounter />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} icon={m.icon} value={m.value} label={m.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Research Areas" subtitle="Exploring the frontiers of AI for Law, Healthcare, and Society" />
          <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm">
            {sortedResearchAreas.map((area, i) => (
              <ResearchCard key={area.id} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-paper dark:bg-paper-dark border-y border-hairline dark:border-hairline-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-ink dark:text-ink-dark">Featured Publications</h2>
              <div className="mt-4 h-0.5 w-16 bg-accent dark:bg-accent-link rounded-full" />
            </div>
            <Link href="/publications/" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-6">
            {featuredPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/publications/" className="inline-flex items-center gap-1 text-sm font-medium text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
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
              <h2 className="font-heading text-3xl md:text-4xl text-ink dark:text-ink-dark">Featured Projects</h2>
              <div className="mt-4 h-0.5 w-16 bg-accent dark:bg-accent-link rounded-full" />
            </div>
            <Link href="/projects/" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
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
      <section className="py-20 bg-paper dark:bg-paper-dark border-y border-hairline dark:border-hairline-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Recent News" subtitle="Highlights from research, awards, and academic milestones" />
          <div className="max-w-3xl mx-auto space-y-6">
            {news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link">
                  <Calendar size={18} />
                </div>
                <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-4 flex-1 shadow-sm">
                  <span className="text-xs font-medium text-accent dark:text-accent-link">{item.date}</span>
                  <h3 className="text-sm font-semibold text-ink dark:text-ink-dark mt-1">{item.title}</h3>
                  <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-ink dark:text-ink-dark mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-ink2 dark:text-ink2-dark mb-8">
            I am always open to research collaborations, PhD supervision discussions, invited talks, and industry partnerships in Core AI/ML, Legal AI, and Healthcare AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-sm font-medium text-ink2 dark:text-ink2-dark hover:text-ink dark:hover:text-ink-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/publications/" className="inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1">
              Browse Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
