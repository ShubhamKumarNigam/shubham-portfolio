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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative flex-1 min-w-[8rem] max-w-[14rem] overflow-hidden rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 text-center shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link mb-4">
        <Icon size={22} />
      </div>
      <div className="font-heading text-3xl text-ink dark:text-ink-dark">{value}+</div>
      <div className="mt-1 text-xs md:text-sm text-ink2 dark:text-ink2-dark whitespace-nowrap">{label}</div>
    </motion.div>
  );
}
