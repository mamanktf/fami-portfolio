import { siteConfig } from "@/data/site";

import BackgroundGrid from "@/components/common/background-grid";
import WorkspaceCard from "./workspace-card";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

import Badge from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import SkillChips from "./skill-chips";

import FadeIn from "@/components/animation/fade-in";
import Floating from "@/components/animation/floating";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100svh-4rem)]
        items-center
        py-8
        sm:py-10
      "
    >
      <BackgroundGrid />

      <Container
        className="
          grid
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="min-w-0">
          <FadeIn>
            <Badge className="mb-4 w-fit">
              <Sparkles size={14} />
              Creative Multimedia Portfolio
            </Badge>
          </FadeIn>

          <p
            className="
              mb-2
              mt-5
              text-base
              text-zinc-600
              dark:text-zinc-400
              sm:text-lg
            "
          >
            👋 Hi, I'm
          </p>

          <FadeIn delay={0.1}>
            <h1
              className="
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                sm:text-5xl
                md:text-7xl
              "
            >
              {siteConfig.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2
              className="
                mt-4
                max-w-2xl
                text-xl
                font-semibold
                leading-snug
                text-emerald-600
                dark:text-emerald-400
                sm:text-2xl
                md:text-4xl
              "
            >
              {siteConfig.headline}
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-7
                text-zinc-600
                dark:text-zinc-400
                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              {siteConfig.tagline}
            </p>
          </FadeIn>

          {/* BUTTONS */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
              sm:mt-10
              sm:gap-4
            "
          >
            <FadeIn delay={0.4}>
              <Button
                variant="primary"
                href="#projects"
              >
                {siteConfig.ctaPrimary}
              </Button>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Button
                variant="secondary"
                href="#contact"
              >
                {siteConfig.ctaSecondary}
              </Button>
            </FadeIn>
          </div>

          {/* SKILLS */}
          <FadeIn delay={0.5}>
            <div className="mt-8 sm:mt-10">
              <SkillChips />
            </div>
          </FadeIn>
        </div>

        {/* RIGHT WORKSPACE CARD */}
        <div className="hidden items-center justify-center lg:flex">
          <FadeIn delay={0.6}>
            <Floating>
              <WorkspaceCard />
            </Floating>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}