"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, experiences, education, achievements } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Mail, ExternalLink, Star } from "lucide-react";

const interestList = [
  "Core AI/ML",
  "AI Memory Management",
  "Distributed Training",
  "Test-Time Training",
  "Efficient LLM Systems",
  "LLM Reasoning & Agents",
  "Evaluation & Benchmarking",
  "Legal AI",
  "Explainable AI",
  "NLP",
  "AI for Healthcare",
  "Multilingual AI",
  "Legal Information Retrieval",
  "Responsible AI",
];

const featuredHonours = achievements.filter((a) => a.type === "Award" || a.type === "Recognition" || a.type === "Fellowship").slice(0, 5);

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Researcher, Educator, and Builder of Responsible AI" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative mx-auto w-56 aspect-[4/5] rounded-xl overflow-hidden border border-hairline dark:border-hairline-dark shadow-sm">
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
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-hairline dark:bg-hairline-dark"><span class="text-6xl font-heading text-ink dark:text-ink-dark">${profile.initials}</span></div>`;
                  }
                }}
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="font-heading text-xl text-ink dark:text-ink-dark">{profile.name}</h2>
              <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">{profile.title}</p>
              <p className="text-sm text-muted">{profile.affiliation}</p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark">
                <MapPin size={16} className="text-accent dark:text-accent-link" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark">
                <Mail size={16} className="text-accent dark:text-accent-link" />
                {profile.email}
              </div>
              {profile.socials.website && (
                <a
                  href={profile.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink2 dark:text-ink2-dark hover:text-accent dark:hover:text-accent-link transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
                >
                  <ExternalLink size={16} className="text-accent dark:text-accent-link" />
                  Google Sites Profile
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-base text-ink2 dark:text-ink2-dark leading-relaxed">
              <strong className="text-ink dark:text-ink-dark">Dr. Shubham Kumar Nigam</strong> is a{" "}
              <strong className="text-ink dark:text-ink-dark">Research Fellow</strong> at the School of Computer Science,{" "}
              <a
                href="https://www.birmingham.ac.uk/dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent dark:text-accent-link hover:text-accent-hover hover:underline transition-colors"
              >
                University of Birmingham Dubai
              </a>
              , where he leads research on the{" "}
              <a
                href="/projects/#project-proj-1"
                className="font-bold text-accent dark:text-accent-link hover:text-accent-hover hover:underline transition-colors"
              >
                KAMAL Health Project
              </a>
              —developing interpretable and responsible AI systems for healthcare decision support and patient-centric care across Arabic and English languages.
            </p>
            <p className="text-base text-ink2 dark:text-ink2-dark leading-relaxed">
              He completed his <strong className="text-ink dark:text-ink-dark">Ph.D. in Computer Science and Engineering</strong> from{" "}
              <a
                href="https://www.iitk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent dark:text-accent-link hover:text-accent-hover hover:underline transition-colors"
              >
                IIT Kanpur
              </a>{" "}
              under the supervision of{" "}
              <a
                href="https://www.cse.iitk.ac.in/users/arnabb/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent dark:text-accent-link hover:text-accent-hover hover:underline transition-colors"
              >
                Prof. Arnab Bhattacharya
              </a>
              . His doctoral research,{" "}
              <strong className="text-ink dark:text-ink-dark italic">
                &ldquo;AI in Law: Comprehending the Indian Legal System using Artificial Intelligence,&rdquo;
              </strong>{" "}
              introduced several large-scale datasets, domain-specific models, and benchmark frameworks that are now widely used in Legal NLP.
            </p>
            <p className="text-base text-ink2 dark:text-ink2-dark leading-relaxed">
              His research spans Core AI/ML, AI Memory Management, Distributed Training, Test-Time Training, Efficient LLM Systems, LLM Reasoning and Agents, Evaluation and Benchmarking, Legal AI, Explainable AI, Natural Language Processing, AI for Healthcare, Multilingual AI, Legal Information Retrieval, and Responsible AI. He has published extensively in top-tier venues including ACL, NAACL, EMNLP, COLING, AACL-IJCNLP, and ICAIL.
            </p>
            <p className="text-base text-ink2 dark:text-ink2-dark leading-relaxed">
              He is a <strong className="text-ink dark:text-ink-dark">DAAD Postdoc-NeT-AI Fellow</strong> and has received notable recognitions including a Best Paper Award at the Bridge between AI and Law at AAAI 2026, an MSCA Postdoctoral Fellowship Proposal with 92%+ evaluation score, and AI World notable paper recognition. He actively serves as a reviewer for ARR, Artificial Intelligence and Law Journal, and as a program committee member for multiple symposiums and shared tasks.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {interestList.map((item) => (
                <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-accent-tint border border-accent-tintbd text-accent dark:text-accent-link">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Honours */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl text-ink dark:text-ink-dark mb-6">Honours</h3>
          <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark shadow-sm overflow-hidden">
            {featuredHonours.map((honour, i) => (
              <motion.div
                key={honour.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 px-5 py-4 border-b border-hairline dark:border-hairline-dark last:border-b-0"
              >
                <Star size={16} className="mt-1 text-signal shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink dark:text-ink-dark">
                    {honour.link ? (
                      <a href={honour.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-link hover:underline transition-colors">
                        {honour.title}
                      </a>
                    ) : (
                      honour.title
                    )}
                  </p>
                  <p className="text-xs text-ink2 dark:text-ink2-dark mt-0.5">{honour.description}</p>
                </div>
                <span className="text-xs font-mono text-muted shrink-0">{honour.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl text-ink dark:text-ink-dark mb-6">Experience</h3>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pl-8 pb-8 last:pb-0 border-l-2 border-hairline dark:border-hairline-dark"
              >
                <div className={`absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-paper dark:border-paper-dark ${i === 0 ? "bg-accent" : "bg-muted"}`} />
                <div>
                  <p className="font-semibold text-ink dark:text-ink-dark">{exp.role}</p>
                  <p className="text-xs font-mono text-accent dark:text-accent-link mt-0.5">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">
                    {exp.organizationUrl ? (
                      <a href={exp.organizationUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent dark:hover:text-accent-link hover:underline transition-colors">
                        {exp.organization}
                      </a>
                    ) : (
                      <span className="font-medium">{exp.organization}</span>
                    )}
                    <span className="mx-1">·</span>
                    {exp.location}
                  </p>
                  {exp.description.length > 0 && (
                    <p className="text-sm text-ink2 dark:text-ink2-dark mt-2">{exp.description[0]}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl text-ink dark:text-ink-dark mb-6">Education</h3>
          <div className="space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pl-8 pb-8 last:pb-0 border-l-2 border-hairline dark:border-hairline-dark"
              >
                <div className={`absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-paper dark:border-paper-dark ${edu.degree.toLowerCase().includes("ph.d") ? "bg-signal" : "bg-muted"}`} />
                <div>
                  <p className="font-semibold text-ink dark:text-ink-dark">{edu.degree}</p>
                  <p className="text-xs font-mono text-accent dark:text-accent-link mt-0.5">{edu.period}</p>
                  <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent dark:hover:text-accent-link hover:underline transition-colors">
                        {edu.institution}
                      </a>
                    ) : (
                      <span className="font-medium">{edu.institution}</span>
                    )}
                    <span className="mx-1">·</span>
                    {edu.location}
                  </p>
                  {edu.thesis && (
                    <p className="text-sm text-ink2 dark:text-ink2-dark mt-2">
                      <span className="font-medium text-ink dark:text-ink-dark">Thesis:</span>{" "}
                      <span className="italic">{edu.thesis}</span>
                    </p>
                  )}
                  {edu.supervisor && (
                    <p className="text-sm text-ink2 dark:text-ink2-dark mt-1">
                      <span className="font-medium text-ink dark:text-ink-dark">Supervisor:</span>{" "}
                      {edu.supervisorUrl ? (
                        <a href={edu.supervisorUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent dark:hover:text-accent-link hover:underline transition-colors">
                          {edu.supervisor}
                        </a>
                      ) : (
                        <span className="font-medium">{edu.supervisor}</span>
                      )}
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
