"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/SocialIcons";

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
                  { href: profile.socials.googleScholar, icon: GoogleScholarIcon, label: "Google Scholar", color: "hover:text-emerald-600 dark:hover:text-emerald-400" },
                  { href: profile.socials.github, icon: GitHubIcon, label: "GitHub", color: "hover:text-slate-900 dark:hover:text-slate-100" },
                  { href: profile.socials.linkedin, icon: LinkedInIcon, label: "LinkedIn", color: "hover:text-blue-700 dark:hover:text-blue-400" },
                  { href: profile.socials.twitter, icon: XIcon, label: "X / Twitter", color: "hover:text-slate-900 dark:hover:text-slate-100" },
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
                    <item.icon size={20} /> {item.label}
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
