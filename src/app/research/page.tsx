"use client";

import { motion } from "framer-motion";
import { researchAreas } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import ResearchCard from "@/components/ResearchCard";

export default function ResearchPage() {
  const sortedResearchAreas = [...researchAreas].sort((a, b) => (b.publications?.length ?? 0) - (a.publications?.length ?? 0));

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Research Areas" subtitle="Advancing Responsible, Scalable, and Interpretable AI across Core ML, Law, and Healthcare" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm"
        >
          <h3 className="font-heading text-xl text-ink dark:text-ink-dark mb-3">Research Philosophy</h3>
          <p className="text-ink2 dark:text-ink2-dark leading-relaxed">
            My research philosophy centers on building AI systems that are not only accurate but also transparent, accountable, and socially beneficial. 
            I believe that the next generation of AI for high-stakes domains like law and healthcare must prioritize interpretability, factual grounding, 
            and fairness. By combining advances in natural language processing, large language models, and domain expertise, I aim to create tools that 
            augment human decision-making rather than replace it.
          </p>
        </motion.div>

        <div className="rounded-lg border border-hairline dark:border-hairline-dark bg-surface dark:bg-surface-dark p-6 shadow-sm">
          {sortedResearchAreas.map((area, i) => (
            <ResearchCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
