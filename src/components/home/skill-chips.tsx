import { creativeTools } from "@/data/skills";
import Stagger from "@/components/animation/stagger";

export default function SkillChips() {
  return (
    <div className="mt-14">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Creative Tools
      </p>

      <div className="flex flex-wrap gap-3">
        {creativeTools.map((tool, index) => (
          <Stagger
            key={tool.name}
            delay={index * 0.08}
          >
            <div
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-200
                bg-white
                px-4
                py-2

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:border-emerald-500
                hover:shadow-md

                dark:border-zinc-700
                dark:bg-zinc-900
                dark:hover:border-emerald-600
                dark:hover:shadow-none
              "
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${tool.color}`}
              />

              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {tool.name}
              </span>
            </div>
          </Stagger>
        ))}
      </div>
    </div>
  );
}