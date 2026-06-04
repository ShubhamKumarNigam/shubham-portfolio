"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  delay?: number;
}

export default function MetricCard({ icon: Icon, value, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
        <Icon size={22} />
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{value}+</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{label}</div>
    </motion.div>
  );
}
