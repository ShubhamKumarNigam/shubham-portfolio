"use client";

import { motion } from "framer-motion";
import { Talk } from "@/data/profile";
import { Calendar, MapPin, Video, FileText } from "lucide-react";

interface TimelineProps {
  talks: Talk[];
}

export default function Timeline({ talks }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-px" />

      <div className="space-y-8">
        {talks.map((talk, index) => (
          <motion.div
            key={talk.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="hidden md:block md:w-1/2 md:text-right">
              <div className={`inline-block text-left ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{talk.date}</span>
              </div>
            </div>

            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 md:-translate-x-1.5 mt-1.5" />

            <div className="ml-10 md:ml-0 md:w-1/2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{talk.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{talk.venue}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {talk.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {talk.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    {talk.format === "Virtual" ? <Video size={12} /> : <MapPin size={12} />} {talk.format}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {talk.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {(talk.links.slides || talk.links.video) && (
                  <div className="mt-3 flex gap-2">
                    {talk.links.slides && (
                      <a href={talk.links.slides} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        <FileText size={12} /> Slides
                      </a>
                    )}
                    {talk.links.video && (
                      <a href={talk.links.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        <Video size={12} /> Video
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
