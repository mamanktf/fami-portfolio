"use client";

import { X, Play } from "lucide-react";
import Link from "next/link";
import { Work } from "@/types/work";
import { useEffect, useRef } from "react";

interface ProjectModalProps {
  open: boolean;
  work: Work | null;
  works: Work[];
  onClose: () => void;
  onSelect: (work: Work) => void;
}

export default function ProjectModal({
  open,
  work,
  works,
  onClose,
  onSelect,
}: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isPortrait = work?.orientation === "portrait";

  const currentIndex = works.findIndex(
    (item) => item.id === work?.id
  );

  const previousWork =
    currentIndex > 0
      ? works[currentIndex - 1]
      : null;

  const nextWork =
    currentIndex < works.length - 1
      ? works[currentIndex + 1]
      : null;

  {/* ================= ESC ================= */}

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  {/* ================= LOCK SCROLL ================= */}

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  {/* ================= RELOAD VIDEO ================= */}

  useEffect(() => {
    if (!videoRef.current || !work) return;

    videoRef.current.pause();
    videoRef.current.load();

    videoRef.current.play().catch(() => {});
  }, [work]);

  if (!open || !work) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-black/80
        p-3
        backdrop-blur-sm
        sm:p-6
      "
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            relative
            w-full
            max-w-6xl
            overflow-hidden
            rounded-2xl
            bg-zinc-900
            shadow-2xl
            sm:rounded-3xl

            ${
              isPortrait
                ? "lg:grid lg:grid-cols-[420px_1fr]"
                : "block"
            }
          `}
        >
          {/* ================= CLOSE ================= */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="
              absolute
              right-3
              top-3
              z-20
              rounded-full
              bg-black/60
              p-2
              text-white
              transition
              hover:bg-black
              sm:right-5
              sm:top-5
            "
          >
            <X size={18} />
          </button>

          {/* ================= VIDEO ================= */}

          {work.preview && (
            <div
              className={`
                flex
                items-center
                justify-center
                bg-black

                ${
                  isPortrait
                    ? "lg:h-full"
                    : ""
                }
              `}
            >
              <video
                ref={videoRef}
                key={work.id}
                controls
                autoPlay
                playsInline
                className={`
                  object-contain

                  ${
                    isPortrait
                      ? "max-h-[65vh] w-auto sm:max-h-[75vh] lg:max-h-[90vh]"
                      : "aspect-video w-full"
                  }
                `}
              >
                <source
                  src={work.preview}
                  type="video/mp4"
                />
              </video>
            </div>
          )}

          {/* ================= CONTENT ================= */}

          <div
            className="
              flex
              max-h-[75vh]
              flex-col
              overflow-y-auto
              p-5

              sm:max-h-[80vh]
              sm:p-8

              lg:max-h-[90vh]
              lg:p-10
            "
          >
            {/* Header */}

            <div className="pr-8">
              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-emerald-400
                  sm:text-xs
                  sm:tracking-[0.35em]
                "
              >
                {work.category}
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  sm:mt-3
                  sm:text-4xl
                "
              >
                {work.title}
              </h2>
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-zinc-300
                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              {work.description}
            </p>

            <hr className="my-6 border-zinc-700 sm:my-8" />

            {/* ================= TOOLS ================= */}

            <div>
              <h3
                className="
                  mb-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-400
                  sm:mb-4
                  sm:text-sm
                "
              >
                Tools
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {work.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="
                      rounded-full
                      border
                      border-zinc-700
                      bg-zinc-800
                      px-3
                      py-1.5
                      text-xs
                      text-zinc-200
                      sm:px-4
                      sm:py-2
                      sm:text-sm
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <hr className="my-6 border-zinc-700 sm:my-8" />

            {/* ================= DETAILS ================= */}

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start justify-between gap-6">
                <span className="shrink-0 text-sm text-zinc-500">
                  Role
                </span>

                <span className="text-right text-sm font-medium text-white">
                  {work.role ?? "-"}
                </span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <span className="shrink-0 text-sm text-zinc-500">
                  Client
                </span>

                <span className="text-right text-sm font-medium text-white">
                  {work.client ?? "-"}
                </span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <span className="shrink-0 text-sm text-zinc-500">
                  Year
                </span>

                <span className="text-right text-sm font-medium text-white">
                  {work.year ?? "-"}
                </span>
              </div>
            </div>

            {/* ================= FOOTER ================= */}

            <div className="mt-8 pt-2 sm:mt-auto sm:pt-10">
              {/* YouTube */}

              {work.youtube && work.youtube !== "#" && (
                <Link
                  href={work.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-red-600
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-red-700
                    sm:gap-3
                    sm:px-6
                    sm:py-3
                  "
                >
                  <Play size={16} />
                  Watch on YouTube
                </Link>
              )}

              <hr className="my-6 border-zinc-700 sm:my-8" />

              {/* Previous / Next */}

              <div className="grid grid-cols-2 gap-4">
                {/* Previous */}

                <button
                  type="button"
                  disabled={!previousWork}
                  onClick={() =>
                    previousWork &&
                    onSelect(previousWork)
                  }
                  className={`
                    min-w-0
                    text-left
                    transition-all

                    ${
                      previousWork
                        ? "text-white hover:text-emerald-400"
                        : "cursor-not-allowed text-zinc-600"
                    }
                  `}
                >
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    Previous
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold sm:text-base">
                    {previousWork?.title ?? "-"}
                  </p>
                </button>

                {/* Next */}

                <button
                  type="button"
                  disabled={!nextWork}
                  onClick={() =>
                    nextWork &&
                    onSelect(nextWork)
                  }
                  className={`
                    min-w-0
                    text-right
                    transition-all

                    ${
                      nextWork
                        ? "text-white hover:text-emerald-400"
                        : "cursor-not-allowed text-zinc-600"
                    }
                  `}
                >
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    Next
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold sm:text-base">
                    {nextWork?.title ?? "-"}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}