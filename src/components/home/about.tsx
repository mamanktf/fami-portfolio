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
           className="scroll-mt-24 py-20"
        >
            <Container>

               <div className="grid items-center gap-20 lg:grid-cols-[340px_1fr]">

                    <IdentityCard />

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                            ABOUT ME
                        </p>

                        <h2 className="mt-5 text-5xl font-bold leading-tight">
                            Hi, I'm
                            <br />
                            Fami Firdaus
                        </h2>

                        <h3 className="mt-4 text-2xl font-semibold text-emerald-500">
                            Creative Multimedia
                            <br />
                            & Tahfidz Teacher
                        </h3>

                        <p className="mt-7 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
                            I create engaging visual content through video editing,
                            motion graphics, graphic design, and digital content
                            creation. Alongside my creative work, I teach Tahfidz,
                            combining creativity, education, and technology into
                            meaningful learning experiences.
                        </p>

                        <div className="mt-10">

                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                                SPECIALIZATION
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2">

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
                px-5
                py-4

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-emerald-500
                hover:shadow-lg

                dark:border-zinc-800
                dark:bg-zinc-900/50
            "
        >
            <div className="text-emerald-500">
                {icon}
            </div>

            <span className="font-medium">
                {title}
            </span>
        </div>
    );
}