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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{entry.course}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {entry.role}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {entry.institution} · {entry.period}
                    </p>
                    {entry.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">{entry.description}</p>
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
