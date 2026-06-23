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

const gradientToIconStyle: Record<string, { text: string; bg: string; darkText: string; darkBg: string }> = {
  "from-violet-600 to-indigo-600": { text: "text-violet-600", bg: "bg-violet-50", darkText: "dark:text-violet-400", darkBg: "dark:bg-violet-900/30" },
  "from-blue-600 to-cyan-600": { text: "text-blue-600", bg: "bg-blue-50", darkText: "dark:text-blue-400", darkBg: "dark:bg-blue-900/30" },
  "from-emerald-600 to-teal-600": { text: "text-emerald-600", bg: "bg-emerald-50", darkText: "dark:text-emerald-400", darkBg: "dark:bg-emerald-900/30" },
  "from-amber-600 to-orange-600": { text: "text-amber-600", bg: "bg-amber-50", darkText: "dark:text-amber-400", darkBg: "dark:bg-amber-900/30" },
  "from-blue-700 to-indigo-700": { text: "text-blue-700", bg: "bg-blue-50", darkText: "dark:text-blue-400", darkBg: "dark:bg-blue-900/30" },
  "from-rose-600 to-pink-600": { text: "text-rose-600", bg: "bg-rose-50", darkText: "dark:text-rose-400", darkBg: "dark:bg-rose-900/30" },
  "from-cyan-600 to-sky-600": { text: "text-cyan-900", bg: "bg-cyan-200", darkText: "dark:text-cyan-200", darkBg: "dark:bg-cyan-800" },
  "from-amber-500 to-orange-500": { text: "text-amber-600", bg: "bg-amber-50", darkText: "dark:text-amber-400", darkBg: "dark:bg-amber-900/30" },
  "from-fuchsia-600 to-purple-600": { text: "text-fuchsia-600", bg: "bg-fuchsia-50", darkText: "dark:text-fuchsia-400", darkBg: "dark:bg-fuchsia-900/30" },
  "from-teal-600 to-cyan-600": { text: "text-teal-600", bg: "bg-teal-50", darkText: "dark:text-teal-400", darkBg: "dark:bg-teal-900/30" },
};

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

export default function ResearchCard({ area, index }: ResearchCardProps) {
  const Icon = iconMap[area.icon] || Scale;
  const iconStyle = gradientToIconStyle[area.gradient] || { text: "text-blue-600", bg: "bg-blue-50", darkText: "dark:text-blue-400", darkBg: "dark:bg-blue-900/30" };

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
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconStyle.bg} ${iconStyle.darkBg} ${iconStyle.text} ${iconStyle.darkText} mb-4`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 font-heading">{area.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{area.description}</p>
    </motion.div>
  );
}
