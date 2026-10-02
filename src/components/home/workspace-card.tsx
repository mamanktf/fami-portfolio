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

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-emerald-300

        dark:border-zinc-800
        dark:bg-zinc-900/40
        dark:shadow-none
        dark:hover:border-emerald-700
      "
    >
      {/* Header */}
      <div>
        <span className="text-sm font-medium text-emerald-500">
          FamStudio
        </span>

        <h3 className="mt-2 text-2xl font-bold">
          Creative Workspace
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Crafting visual stories through editing, motion graphics,
          and digital creativity.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-2 gap-4">
        <CardItem
          icon={<Monitor className="h-6 w-6 text-emerald-500" />}
          title="Video Editing"
        />

        <CardItem
          icon={<Clapperboard className="h-6 w-6 text-emerald-500" />}
          title="Motion Design"
        />

        <CardItem
          icon={<Camera className="h-6 w-6 text-emerald-500" />}
          title="Photography"
        />

        <CardItem
          icon={<Sparkles className="h-6 w-6 text-emerald-500" />}
          title="Creativity"
        />
      </div>
    </div>
  );
}

interface CardItemProps {
  icon: React.ReactNode;
  title: string;
}

function CardItem({ icon, title }: CardItemProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-zinc-200
        p-4

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-emerald-300
        hover:shadow-lg

        dark:border-zinc-700
        dark:hover:border-emerald-600
        dark:hover:shadow-none
      "
    >
      <div className="mb-2">{icon}</div>

      <p className="font-medium">{title}</p>
    </div>
  );
}