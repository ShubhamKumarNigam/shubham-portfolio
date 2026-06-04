"use client";

import { motion } from "framer-motion";
import { ResearchArea } from "@/data/profile";
import { Scale, Eye, Brain, HeartPulse, Globe, Database, Server, RefreshCw, Bot, BarChart3, BrainCircuit } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  scale: Scale,
  eye: Eye,
  brain: Brain,
  "heart-pulse": HeartPulse,
  globe: Globe,
  database: Database,
  server: Server,
  "refresh-cw": RefreshCw,
  bot: Bot,
  "bar-chart-3": BarChart3,
  "brain-circuit": BrainCircuit,
};

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

export default function ResearchCard({ area, index }: ResearchCardProps) {
  const Icon = iconMap[area.icon] || Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient}`} />
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white mb-4`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 font-heading">{area.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{area.description}</p>
    </motion.div>
  );
}
