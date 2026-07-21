import { creativeTools } from "@/data/skills";

export default function SkillChips() {
  return (
    <div className="mt-10">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Creative Tools
      </p>

      <div className="flex flex-wrap gap-3">
        {creativeTools.map((tool) => (
          <div
            key={tool.name}
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
              hover:border-emerald-500
              hover:shadow-md

              dark:border-zinc-700
              dark:bg-zinc-900
            "
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${tool.color}`}
            />

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}