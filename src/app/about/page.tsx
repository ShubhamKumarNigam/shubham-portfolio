"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, experiences, education } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Mail, Calendar, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Researcher, Educator, and Builder of Responsible AI" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative mx-auto w-64 h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-slate-700"><span class="text-6xl font-bold text-blue-600 dark:text-blue-400">${profile.initials}</span></div>`;
                  }
                }}
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{profile.name}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{profile.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">{profile.affiliation}</p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={16} className="text-blue-500" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail size={16} className="text-blue-500" />
                {profile.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Calendar size={16} className="text-blue-500" />
                Born 05 June 1991
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Experience */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-2">
            <Briefcase size={24} className="text-blue-600" /> Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-2 border-white dark:border-slate-950" />
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {exp.organization} · {exp.location}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-2">
            <GraduationCap size={24} className="text-blue-600" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-950" />
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{edu.period}</p>
                  {edu.thesis && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span className="font-medium">Thesis:</span> {edu.thesis}
                    </p>
                  )}
                  {edu.supervisor && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">Supervisor:</span> {edu.supervisor}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
