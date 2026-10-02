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
    currentIndex > 0 ? works[currentIndex - 1] : null;

  const nextWork =
    currentIndex < works.length - 1
      ? works[currentIndex + 1]
      : null;

  // ESC
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

  // Lock Scroll
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reload Video ketika project berubah
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-6"
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            relative
            w-full
            max-w-6xl
            overflow-hidden
            rounded-3xl
            bg-zinc-900
            shadow-2xl
            ${
              isPortrait
                ? "grid lg:grid-cols-[420px_1fr]"
                : "block"
            }
          `}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute
              right-5
              top-5
              z-10
              rounded-full
              bg-black/50
              p-2
              text-white
              hover:bg-black
            "
          >
            <X size={20} />
          </button>

          {/* Video */}
          {work.preview && (
            <div
              className={`
                bg-black
                flex
                items-center
                justify-center
                ${isPortrait ? "h-full" : ""}
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
                      ? "max-h-[90vh] w-auto"
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

          {/* Content */}
          <div
            className="
              flex
              max-h-[90vh]
              flex-col
              overflow-y-auto
              p-8
              lg:p-10
            "
          >
            {/* Header */}
            <div>
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-emerald-400
                "
              >
                {work.category}
              </span>

              <h2 className="mt-3 text-4xl font-bold text-white">
                {work.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-6 leading-8 text-zinc-300">
              {work.description}
            </p>

            <hr className="my-8 border-zinc-700" />

            {/* Tools */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {work.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="
                      rounded-full
                      border
                      border-zinc-700
                      bg-zinc-800
                      px-4
                      py-2
                      text-sm
                      text-zinc-200
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <hr className="my-8 border-zinc-700" />

            {/* Detail */}
            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Role
                </span>

                <span className="font-medium text-white">
                  {work.role ?? "-"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Client
                </span>

                <span className="font-medium text-white">
                  {work.client ?? "-"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Year
                </span>

                <span className="font-medium text-white">
                  {work.year ?? "-"}
                </span>
              </div>
            </div>

            <div className="mt-auto pt-10">
              {work.youtube && (
                <Link
                  href={work.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-red-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-red-700
                    hover:scale-105
                  "
                >
                  <Play size={18} />
                  Watch on YouTube
                </Link>
              )}

              <hr className="my-8 border-zinc-700" />

              <div className="flex items-center justify-between gap-6">
                {/* Previous */}
                <button
                  disabled={!previousWork}
                  onClick={() =>
                    previousWork &&
                    onSelect(previousWork)
                  }
                  className={`
                    text-left
                    transition-all
                    ${
                      previousWork
                        ? "text-white hover:text-emerald-400"
                        : "cursor-not-allowed text-zinc-600"
                    }
                  `}
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Previous
                  </p>

                  <p className="mt-1 font-semibold">
                    {previousWork?.title ?? "-"}
                  </p>
                </button>

                {/* Next */}
                <button
                  disabled={!nextWork}
                  onClick={() =>
                    nextWork && onSelect(nextWork)
                  }
                  className={`
                    text-right
                    transition-all
                    ${
                      nextWork
                        ? "text-white hover:text-emerald-400"
                        : "cursor-not-allowed text-zinc-600"
                    }
                  `}
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Next
                  </p>

                  <p className="mt-1 font-semibold">
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