"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { Award, Trophy, Medal, Star, Plane, Users } from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  Fellowship: Star,
  Award: Trophy,
  Recognition: Medal,
  "Travel Grant": Plane,
  Service: Users,
};

const typeColors: Record<string, string> = {
  Fellowship: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  Award: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  Recognition: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
  "Travel Grant": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
  Service: "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400",
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements & Honors" subtitle="Awards, fellowships, grants, and professional service" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => {
            const Icon = typeIcons[ach.type] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl ${typeColors[ach.type]}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{ach.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{ach.description}</p>
                  {ach.date && (
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{ach.date}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
