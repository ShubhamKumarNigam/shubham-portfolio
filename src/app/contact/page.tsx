"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import AppointmentForm from "@/components/AppointmentForm";
import { Mail, MapPin, BookOpen, Code2, Users, MessageCircle, ExternalLink } from "lucide-react";

function HuggingFaceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 2.5c-1.1 0-2 .9-2 2v.6c-.5-.3-1.1-.5-1.7-.5-1.8 0-3.3 1.5-3.3 3.3 0 .4.1.7.2 1.1-.7.3-1.2 1-1.2 1.9 0 .6.3 1.2.7 1.5-.4.5-.7 1.2-.7 1.9 0 1.5 1.2 2.7 2.7 2.7h.4c-.3.5-.5 1.1-.5 1.7 0 1.8 1.5 3.3 3.3 3.3.6 0 1.2-.2 1.7-.5v.6c0 1.1.9 2 2 2s2-.9 2-2v-.6c.5.3 1.1.5 1.7.5 1.8 0 3.3-1.5 3.3-3.3 0-.6-.2-1.2-.5-1.7h.4c1.5 0 2.7-1.2 2.7-2.7 0-.7-.3-1.4-.7-1.9.4-.4.7-.9.7-1.5 0-.9-.5-1.6-1.2-1.9.1-.3.2-.7.2-1.1 0-1.8-1.5-3.3-3.3-3.3-.6 0-1.2.2-1.7.5v-.6c0-1.1-.9-2-2-2zm0 1.2c.4 0 .8.4.8.8v1.5c0 .2-.1.4-.3.5-.2.1-.4.1-.6 0-.2-.1-.3-.3-.3-.5V4.5c0-.4.4-.8.8-.8zm-3.7 2.3c1.2 0 2.1.9 2.1 2.1 0 .3-.1.5-.2.8-.1.2-.3.4-.5.5-.2.1-.5.2-.8.2-.3 0-.5-.1-.8-.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-1.2.9-2.1 2.1-2.1zm7.4 0c1.2 0 2.1.9 2.1 2.1 0 .3-.1.5-.2.8-.1.2-.3.4-.5.5-.2.1-.5.2-.8.2-.3 0-.5-.1-.8-.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.8 0-1.2.9-2.1 2.1-2.1zM8.8 11c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm6.4 0c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm-7.5 4.3c.6-.3 1.3-.4 2-.4h1.6c.7 0 1.4.1 2 .4.6.3 1.1.7 1.5 1.2.4.5.6 1.1.6 1.7 0 .6-.2 1.2-.6 1.7-.4.5-.9.9-1.5 1.2-.6.3-1.3.4-2 .4H9.7c-.7 0-1.4-.1-2-.4-.6-.3-1.1-.7-1.5-1.2-.4-.5-.6-1.1-.6-1.7 0-.6.2-1.2.6-1.7.4-.5.9-.9 1.5-1.2z"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Get in touch for collaborations, talks, or inquiries" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={18} className="text-blue-500" /> {profile.email}
                </a>
                <a href={`mailto:${profile.emailAlt}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={18} className="text-blue-500" /> {profile.emailAlt}
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={18} className="text-blue-500" /> {profile.location}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80 dark:from-blue-900/20 dark:via-slate-900 dark:to-cyan-900/20 p-6 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Social & Academic</h3>
              <div className="space-y-2">
                {[
                  { href: profile.socials.googleScholar, icon: BookOpen, label: "Google Scholar", color: "hover:text-emerald-600 dark:hover:text-emerald-400" },
                  { href: profile.socials.github, icon: Code2, label: "GitHub", color: "hover:text-slate-900 dark:hover:text-slate-100" },
                  { href: profile.socials.linkedin, icon: Users, label: "LinkedIn", color: "hover:text-blue-700 dark:hover:text-blue-400" },
                  { href: profile.socials.twitter, icon: MessageCircle, label: "X / Twitter", color: "hover:text-sky-500 dark:hover:text-sky-400" },
                  { href: profile.socials.huggingfaceOrg, icon: HuggingFaceIcon, label: "HuggingFace", color: "hover:text-yellow-600 dark:hover:text-yellow-400" },
                  { href: profile.socials.university, icon: ExternalLink, label: "University Profile", color: "hover:text-violet-600 dark:hover:text-violet-400" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400 ${item.color} hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all`}
                  >
                    <item.icon size={18} /> {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Collaboration CTA</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                I am actively looking for research collaborators, PhD students, and industry partners in Legal AI and Healthcare AI. If you share similar interests, let us connect!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Request a Meeting</h3>
              <AppointmentForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
