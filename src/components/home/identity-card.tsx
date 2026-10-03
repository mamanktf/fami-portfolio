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

      <div
        className="
          relative
          h-[260px]
          overflow-hidden
          sm:h-[320px]
        "
      >
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

      <div
        className="
          space-y-4
          p-5
          sm:space-y-6
          sm:p-7
        "
      >
        {/* Location */}

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-zinc-500
            dark:text-zinc-400
          "
        >
          <MapPin className="h-4 w-4 shrink-0" />
          Bekasi, Indonesia
        </div>

        {/* Availability */}

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-emerald-500
          "
        >
          <Circle className="h-3 w-3 shrink-0 fill-current" />
          Available for Work
        </div>

        {/* Stats */}

        <div
          className="
            border-t
            border-zinc-200
            pt-5
            dark:border-zinc-800
            sm:pt-6
          "
        >
          <div className="grid grid-cols-3">
            <StatItem
              value="4+"
              label="Years"
            />

            <StatItem
              value="100+"
              label="Projects"
            />

            <StatItem
              value="6"
              label="Tools"
            />
          </div>
        </div>
      </div>
    </div>
  );
}