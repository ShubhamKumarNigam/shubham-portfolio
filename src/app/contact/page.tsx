"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { GoogleScholarIcon, GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Get in touch for collaborations, talks, or inquiries" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm">
              <h3 className="font-heading text-lg text-ink dark:text-ink-dark mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
                  <Mail size={18} className="text-accent dark:text-accent-link" /> {profile.email}
                </a>
                <a href={`mailto:${profile.emailAlt}`} className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded">
                  <Mail size={18} className="text-accent dark:text-accent-link" /> {profile.emailAlt}
                </a>
                <div className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark">
                  <MapPin size={18} className="text-accent dark:text-accent-link" /> {profile.location}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm">
              <h3 className="font-heading text-lg text-ink dark:text-ink-dark mb-4">Social & Academic</h3>
              <div className="space-y-1">
                {[
                  { href: profile.socials.website, icon: Globe, label: "Google Sites" },
                  { href: profile.socials.googleScholar, icon: GoogleScholarIcon, label: "Google Scholar" },
                  { href: profile.socials.github, icon: GitHubIcon, label: "GitHub" },
                  { href: profile.socials.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                  { href: profile.socials.twitter, icon: XIcon, label: "X / Twitter" },
                  { href: profile.socials.huggingfaceOrg, icon: HuggingFaceIcon, label: "HuggingFace" },
                  { href: profile.socials.university, icon: ExternalLink, label: "University Profile" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link hover:bg-paper dark:hover:bg-paper-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                  >
                    <item.icon size={20} /> {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-accent-tint border-accent-tintbd p-6">
              <h3 className="font-heading text-lg text-accent dark:text-accent-link mb-2">Collaboration CTA</h3>
              <p className="text-sm text-ink2 dark:text-ink2-dark">
                I am actively looking for research collaborators, PhD students, and industry partners in Legal AI and Healthcare AI. If you share similar interests, let us connect!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 md:p-8 shadow-sm">
              <h3 className="font-heading text-xl text-ink dark:text-ink-dark mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
