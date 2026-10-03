"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Play } from "lucide-react";

import { Work } from "@/types/work";

interface WorkCardProps {
  work: Work;
  onSelect: (work: Work) => void;
}

export default function WorkCard({
  work,
  onSelect,
}: WorkCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white/60
        backdrop-blur
        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-emerald-500
        hover:shadow-xl

        dark:border-zinc-800
        dark:bg-zinc-900/50
      "
    >
      {/* ================= THUMBNAIL ================= */}

      <div className="relative aspect-video overflow-hidden">
        {/* Thumbnail */}

        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:opacity-0
          "
        />

        {/* Preview Video */}

        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          <source
            src={work.preview}
            type="video/mp4"
          />
        </video>

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Play Button */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            transition-all
            duration-300
            group-hover:scale-75
            group-hover:opacity-0
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-xl

              sm:h-16
              sm:w-16
            "
          >
            <Play
              size={24}
              className="ml-1 text-black sm:size-7"
            />
          </div>
        </div>

        {/* Duration */}

        {work.duration && (
          <div
            className="
              absolute
              bottom-3
              right-3
              flex
              items-center
              gap-1
              rounded-full
              bg-black/70
              px-2.5
              py-1
              text-[11px]
              text-white

              sm:px-3
              sm:text-xs
            "
          >
            <Clock3 size={11} />
            {work.duration}
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          space-y-4
          p-5
          sm:space-y-5
          sm:p-6
        "
      >
        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            bg-emerald-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-emerald-500
          "
        >
          {work.category}
        </span>

        {/* Title & Description */}

        <div>
          <h3 className="text-lg font-bold sm:text-xl">
            {work.title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-zinc-600
              dark:text-zinc-400
              sm:text-base
              sm:leading-7
            "
          >
            {work.description}
          </p>
        </div>

        {/* Tools */}

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {work.tools.map((tool) => (
            <span
              key={tool}
              className="
                rounded-full
                border
                border-zinc-200
                px-2.5
                py-1
                text-[11px]
                dark:border-zinc-700
                sm:px-3
                sm:text-xs
              "
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Actions */}

        <div className="flex items-center justify-between">
          {/* View Work */}

          <Link
            href={work.youtube ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-emerald-500
              sm:gap-2
              sm:text-sm
            "
          >
            <Play size={14} />
            View Work
          </Link>

          {/* Details */}

          <button
            type="button"
            onClick={() => onSelect(work)}
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-zinc-500
              transition-all
              group-hover:text-emerald-500
              sm:gap-2
              sm:text-sm
            "
          >
            Details

            <ArrowRight
              size={14}
              className="
                transition-transform
                group-hover:translate-x-1
                sm:size-4
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}