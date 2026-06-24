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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  {ach.link ? (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
                    >
                      {ach.title}
                    </a>
                  ) : (
                    <h3 className="text-base font-semibold text-ink dark:text-ink-dark">{ach.title}</h3>
                  )}
                  <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">{ach.description}</p>
                  {ach.date && (
                    <p className="text-xs font-mono text-muted mt-2">{ach.date}</p>
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
