"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";

const experiences = [
  {
    year: "2026",
    title: "Tahfidz Teacher",
    company: "SDIT Arkan Cendekia",
    description:
      "Mengajar Tahfidz Al-Qur'an, membimbing hafalan siswa, sekaligus mengembangkan sistem digital sertifikasi tahfidz.",
  },
  {
    year: "2025",
    title: "Freelance Video Editor",
    company: "Personal & Client Projects",
    description:
      "Mengerjakan editing video, motion graphic, dan konten promosi menggunakan Adobe Premiere Pro dan After Effects.",
  },
  {
    year: "2024",
    title: "Creative Multimedia Learning",
    company: "Self Learning",
    description:
      "Mempelajari UI Design, Motion Graphic, Photography, dan Web Development menggunakan React & Next.js.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <Container>
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400 sm:tracking-[0.4em]">
            Experience
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:mt-4
              sm:text-5xl
            "
          >
            Career Journey
          </h2>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative ml-3 border-l border-zinc-800 sm:ml-4">
          {experiences.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                relative
                mb-10
                pl-7
                last:mb-0
                sm:mb-14
                sm:pl-10
              "
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  -left-[7px]
                  top-1.5
                  h-3.5
                  w-3.5
                  rounded-full
                  bg-emerald-400
                  ring-4
                  ring-zinc-950
                  sm:-left-[9px]
                  sm:top-2
                  sm:h-4
                  sm:w-4
                "
              />

              {/* Year */}

              <span className="text-sm font-semibold text-emerald-400">
                {item.year}
              </span>

              {/* Title */}

              <h3
                className="
                  mt-1.5
                  text-xl
                  font-bold
                  leading-snug
                  text-white
                  sm:mt-2
                  sm:text-2xl
                "
              >
                {item.title}
              </h3>

              {/* Company */}

              <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                {item.company}
              </p>

              {/* Description */}

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-7
                  text-zinc-500
                  sm:mt-4
                  sm:text-base
                  sm:leading-8
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}