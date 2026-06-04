"use client";

import { talks } from "@/data/profile";
import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";

export default function TalksPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Invited Talks" subtitle="Conference keynotes, seminar presentations, and tutorials" />
        <Timeline talks={talks} />
      </div>
    </div>
  );
}
