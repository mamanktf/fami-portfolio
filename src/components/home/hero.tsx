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
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-10"
    >
      <BackgroundGrid />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
            <FadeIn>
                <Badge className="mb-4 w-fit">
                    
                    <Sparkles size={14} />
                    Creative Multimedia Portfolio
                </Badge>
            </FadeIn>
          <p className="mb-3 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            👋 Hi, I'm
          </p>

            <FadeIn delay={0.1}>

                <h1 className="text-5xl font-extrabold tracking-tight leading-tight md:text-7xl">
                    {siteConfig.name}
                </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
                <h2 className="mt-4 text-2xl font-semibold text-emerald-600 dark:text-emerald-400 md:text-4xl">
                    {siteConfig.headline}
                </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    {siteConfig.tagline}
                </p>
            </FadeIn>

          <div className="mt-10 flex flex-wrap items-center gap-4">

            <FadeIn delay={0.4}>
                <Button variant="primary">
                {siteConfig.ctaPrimary}
                </Button>
            </FadeIn>
            
            <FadeIn delay={0.4}>
                <Button variant="secondary">
                {siteConfig.ctaSecondary}
                </Button>
             </FadeIn>

          </div>
             <FadeIn delay={0.5}>
                <SkillChips />
            </FadeIn>
        </div>

        {/* Right Content */}
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