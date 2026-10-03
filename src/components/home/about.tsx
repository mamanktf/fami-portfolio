import {
  BadgeCheck,
  Clapperboard,
  GraduationCap,
  PenTool,
} from "lucide-react";

import Container from "@/components/ui/container";
import IdentityCard from "./identity-card";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-14 sm:py-20"
    >
      <Container>
        <div
          className="
            grid
            items-center
            gap-12
            sm:gap-16
            lg:grid-cols-[340px_1fr]
            lg:gap-20
          "
        >
          {/* ================= IDENTITY CARD ================= */}

          <IdentityCard />

          {/* ================= ABOUT CONTENT ================= */}

          <div className="min-w-0">
            {/* Label */}

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              ABOUT ME
            </p>

            {/* Heading */}

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                sm:mt-5
                sm:text-5xl
              "
            >
              Hi, I'm
              <br />
              Fami Firdaus
            </h2>

            {/* Subtitle */}

            <h3
              className="
                mt-4
                text-xl
                font-semibold
                leading-snug
                text-emerald-500
                sm:text-2xl
              "
            >
              Creative Multimedia
              <br />
              & Tahfidz Teacher
            </h3>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-zinc-600
                dark:text-zinc-400
                sm:mt-7
                sm:text-base
                sm:leading-8
              "
            >
              I create engaging visual content through video editing,
              motion graphics, graphic design, and digital content
              creation. Alongside my creative work, I teach Tahfidz,
              combining creativity, education, and technology into
              meaningful learning experiences.
            </p>

            {/* Specialization */}

            <div className="mt-8 sm:mt-10">
              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                  sm:mb-5
                "
              >
                SPECIALIZATION
              </p>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <Skill
                  icon={<BadgeCheck size={18} />}
                  title="Video Editing"
                />

                <Skill
                  icon={<Clapperboard size={18} />}
                  title="Motion Graphics"
                />

                <Skill
                  icon={<PenTool size={18} />}
                  title="Graphic Design"
                />

                <Skill
                  icon={<GraduationCap size={18} />}
                  title="Tahfidz Teacher"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface SkillProps {
  icon: React.ReactNode;
  title: string;
}

function Skill({
  icon,
  title,
}: SkillProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-zinc-200
        bg-white/60
        px-4
        py-3.5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-emerald-500
        hover:shadow-lg

        dark:border-zinc-800
        dark:bg-zinc-900/50

        sm:px-5
        sm:py-4
      "
    >
      <div className="shrink-0 text-emerald-500">
        {icon}
      </div>

      <span className="text-sm font-medium sm:text-base">
        {title}
      </span>
    </div>
  );
}