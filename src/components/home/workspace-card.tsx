import {
  Camera,
  Clapperboard,
  Monitor,
  Sparkles,
} from "lucide-react";

export default function WorkspaceCard() {
  return (
    <div
      className="
        relative
        flex
        h-[420px]
        w-[420px]
        flex-col
        justify-between
        rounded-3xl
        border
        border-zinc-200
        bg-white/70
        p-8
        shadow-lg
        backdrop-blur-xl

        dark:border-zinc-800
        dark:bg-zinc-900/40
        dark:shadow-none
      "
    >
      <div>
        <span className="text-sm font-medium text-emerald-500">
          FamStudio
        </span>

        <h3 className="mt-2 text-2xl font-bold">
          Creative Workspace
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Crafting visual stories through editing,
          motion graphics, and digital creativity.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="
            rounded-xl
            border
            border-zinc-200
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-md

            dark:border-zinc-700
            dark:hover:shadow-none
          "
        >
          <Monitor className="mb-2 h-6 w-6 text-emerald-500" />
          <p className="font-medium">Video Editing</p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-200
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-md

            dark:border-zinc-700
            dark:hover:shadow-none
          "
        >
          <Clapperboard className="mb-2 h-6 w-6 text-emerald-500" />
          <p className="font-medium">Motion Design</p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-200
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-md

            dark:border-zinc-700
            dark:hover:shadow-none
          "
        >
          <Camera className="mb-2 h-6 w-6 text-emerald-500" />
          <p className="font-medium">Photography</p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-200
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-md

            dark:border-zinc-700
            dark:hover:shadow-none
          "
        >
          <Sparkles className="mb-2 h-6 w-6 text-emerald-500" />
          <p className="font-medium">Creativity</p>
        </div>
      </div>
    </div>
  );
}