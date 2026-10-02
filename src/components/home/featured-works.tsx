"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/container";

import WorkCard from "./work-card";
import FilterTabs from "./filter-tabs";
import ProjectModal from "./project-modal";

import { works } from "@/data/works";
import { Work } from "@/types/work";

const filters = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "Photo & Video",
] as const;

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;

    return works.filter(
      (work) => work.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24"
    >
      <Container>

        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
            FEATURED WORKS
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Selected Creative Projects
          </h2>

          <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
            A collection of my best creative works in video editing,
            motion graphics, graphic design, and multimedia production.
          </p>

        </div>

        {/* Filter */}

        <div className="mt-12 flex justify-center">

          <FilterTabs
            filters={filters}
            active={activeFilter}
            onChange={setActiveFilter}
          />

        </div>

        {/* Grid */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredWorks.map((work) => (
            <WorkCard
                key={work.id}
                work={work}
                onSelect={setSelectedWork}
            />
          ))}

        </div>

       <ProjectModal
          open={selectedWork !== null}
          work={selectedWork}
          works={works}
          onClose={() => setSelectedWork(null)}
          onSelect={setSelectedWork}
        />

      </Container>
    </section>
  );
}
