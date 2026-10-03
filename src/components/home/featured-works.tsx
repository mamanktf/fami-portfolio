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
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-emerald-500
              sm:tracking-[0.35em]
            "
          >
            FEATURED WORKS
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
            "
          >
            Selected Creative Projects
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-zinc-600
              dark:text-zinc-400
              sm:mt-6
              sm:text-base
              sm:leading-8
            "
          >
            A collection of my best creative works in video editing,
            motion graphics, graphic design, and multimedia production.
          </p>
        </div>

        {/* ================= FILTER ================= */}

        <div className="mt-8 flex justify-center sm:mt-12">
          <FilterTabs
            filters={filters}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* ================= WORK GRID ================= */}

        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
            md:gap-8
            xl:grid-cols-3
            sm:mt-14
          "
        >
          {filteredWorks.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onSelect={setSelectedWork}
            />
          ))}
        </div>

        {/* ================= PROJECT MODAL ================= */}

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