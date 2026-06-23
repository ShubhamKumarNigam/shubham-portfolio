"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, experiences, education } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Mail, GraduationCap, Briefcase, ExternalLink } from "lucide-react";

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
              {profile.socials.website && (
                <a
                  href={profile.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} className="text-blue-500" />
                  Google Sites Profile
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-100">Dr. Shubham Kumar Nigam</strong> is a{" "}
              <strong className="text-slate-900 dark:text-slate-100">Research Fellow</strong> at the School of Computer Science,{" "}
              <a
                href="https://www.birmingham.ac.uk/dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
              >
                University of Birmingham Dubai
              </a>
              , where he leads research on the{" "}
              <a
                href="/projects/#project-proj-1"
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
              >
                KAMAL Health Project
              </a>
              —developing interpretable and responsible AI systems for healthcare decision support and patient-centric care across Arabic and English languages.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              He completed his <strong className="text-slate-900 dark:text-slate-100">Ph.D. in Computer Science and Engineering</strong> from{" "}
              <a
                href="https://www.iitk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
              >
                IIT Kanpur
              </a>{" "}
              under the supervision of{" "}
              <a
                href="https://www.cse.iitk.ac.in/users/arnabb/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
              >
                Prof. Arnab Bhattacharya
              </a>
              . His doctoral research,{" "}
              <strong className="text-slate-900 dark:text-slate-100 italic">
                &ldquo;AI in Law: Comprehending the Indian Legal System using Artificial Intelligence,&rdquo;
              </strong>{" "}
              introduced several large-scale datasets, domain-specific models, and benchmark frameworks that are now widely used in Legal NLP.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              His research spans <strong className="text-slate-900 dark:text-slate-100">Core AI/ML</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">AI Memory Management</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Distributed Training</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Test-Time Training</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Efficient LLM Systems</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">LLM Reasoning and Agents</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Evaluation and Benchmarking</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Legal AI</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Explainable AI</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Natural Language Processing</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">AI for Healthcare</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Multilingual AI</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Legal Information Retrieval</strong>, and{" "}
              <strong className="text-slate-900 dark:text-slate-100">Responsible AI</strong>. He has published extensively in top-tier venues including{" "}
              <strong className="text-slate-900 dark:text-slate-100">ACL</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">NAACL</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">EMNLP</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">COLING</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">AACL-IJCNLP</strong>, and{" "}
              <strong className="text-slate-900 dark:text-slate-100">ICAIL</strong>.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              He is a <strong className="text-slate-900 dark:text-slate-100">DAAD Postdoc-NeT-AI Fellow</strong> and has received notable recognitions including a{" "}
              <strong className="text-slate-900 dark:text-slate-100">Best Paper Award at the Bridge between AI and Law at AAAI 2026</strong>, an{" "}
              <strong className="text-slate-900 dark:text-slate-100">MSCA Postdoctoral Fellowship Proposal with 92%+ evaluation score</strong>, and{" "}
              <strong className="text-slate-900 dark:text-slate-100">AI World notable paper recognition</strong>. He actively serves as a reviewer for{" "}
              <strong className="text-slate-900 dark:text-slate-100">ARR</strong>,{" "}
              <strong className="text-slate-900 dark:text-slate-100">Artificial Intelligence and Law Journal</strong>, and as a program committee member for multiple symposiums and shared tasks.
            </p>
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
                    {exp.organizationUrl ? (
                      <a
                        href={exp.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        {exp.organization}
                      </a>
                    ) : (
                      <span className="font-bold text-slate-700 dark:text-slate-300">{exp.organization}</span>
                    )}
                    <span className="mx-1">·</span>
                    {exp.location}
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
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <span className="font-bold text-slate-700 dark:text-slate-300">{edu.institution}</span>
                    )}
                    <span className="mx-1">·</span>
                    {edu.location}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{edu.period}</p>
                  {edu.thesis && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span className="font-bold">Thesis:</span>{" "}
                      <strong className="text-slate-900 dark:text-slate-100 italic">{edu.thesis}</strong>
                    </p>
                  )}
                  {edu.supervisor && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-bold">Supervisor:</span>{" "}
                      {edu.supervisorUrl ? (
                        <a
                          href={edu.supervisorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                        >
                          {edu.supervisor}
                        </a>
                      ) : (
                        <span className="font-bold text-slate-700 dark:text-slate-300">{edu.supervisor}</span>
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
