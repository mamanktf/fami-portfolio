import Image from "next/image";
import { MapPin, Circle } from "lucide-react";

import StatItem from "./stat-item";

export default function IdentityCard() {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-zinc-200
        bg-white/70
        backdrop-blur
        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl

        dark:border-zinc-800
        dark:bg-zinc-900/60
      "
    >
      {/* PHOTO */}

      <div className="relative h-[320px] overflow-hidden">

        <Image
          src="/images/about/fami.jpeg"
          alt="Fami Firdaus"
          fill
          sizes="(max-width: 1024px) 100vw, 340px"
          priority
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* CONTENT */}

      <div className="space-y-6 p-7">

        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <MapPin className="h-4 w-4" />
          Bekasi, Indonesia
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">

          <Circle className="h-3 w-3 fill-current" />

          Available for Work

        </div>

        <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">

          <div className="grid grid-cols-3">

            <StatItem value="4+" label="Years" />

            <StatItem value="100+" label="Projects" />

            <StatItem value="6" label="Tools" />

          </div>

        </div>

      </div>
    </div>
  );
}