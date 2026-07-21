import { siteConfig } from "@/data/site";

import BackgroundGrid from "@/components/common/background-grid";
import WorkspaceCard from "./workspace-card";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

import Badge from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import SkillChips from "./skill-chips";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden py-20"
    >
      <BackgroundGrid />

      <Container className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
            <Badge className="mb-4 w-fit">
                <Sparkles size={14} />
                Creative Multimedia Portfolio
            </Badge>
          <p className="mb-3 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            👋 Hi, I'm
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight leading-tight md:text-7xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-emerald- dark: text-emerald-400 md:text-4xl">
            {siteConfig.headline}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {siteConfig.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button>
              {siteConfig.ctaPrimary}
            </Button>

            <Button variant="secondary">
              {siteConfig.ctaSecondary}
            </Button>
          </div>
        <SkillChips />
        </div>

        {/* Right Content */}
        <div className="hidden items-center justify-center lg:flex">
          <WorkspaceCard />
        </div>
      </Container>
    </section>
  );
}