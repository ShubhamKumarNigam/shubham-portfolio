"use client";

import { motion } from "framer-motion";
import { teaching } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const roleIcons: Record<string, React.ElementType> = {
  "Teaching Assistant": BookOpen,
  Mentor: Users,
};

export default function TeachingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Teaching & Mentoring" subtitle="Courses, training programs, and student mentorship" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teaching.map((entry, i) => {
            const Icon = roleIcons[entry.role] || GraduationCap;
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-ink dark:text-ink-dark">{entry.course}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark text-ink2 dark:text-ink2-dark">
                        {entry.role}
                      </span>
                    </div>
                    <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">
                      {entry.institution} · {entry.period}
                    </p>
                    {entry.description && (
                      <p className="text-sm text-muted mt-2">{entry.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
