"use client";

import { workingProjects } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import WorkingProjectCard from "@/components/WorkingProjectCard";

export default function WorkingProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Working Projects" subtitle="Ongoing research, prototypes, and under-development initiatives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingProjects.map((project) => (
            <WorkingProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
