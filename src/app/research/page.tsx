"use client";

import { motion } from "framer-motion";
import { researchAreas } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import ResearchCard from "@/components/ResearchCard";

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Research Areas" subtitle="Advancing Responsible, Scalable, and Interpretable AI across Core ML, Law, and Healthcare" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Research Philosophy</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            My research philosophy centers on building AI systems that are not only accurate but also transparent, accountable, and socially beneficial. 
            I believe that the next generation of AI for high-stakes domains like law and healthcare must prioritize interpretability, factual grounding, 
            and fairness. By combining advances in natural language processing, large language models, and domain expertise, I aim to create tools that 
            augment human decision-making rather than replace it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
