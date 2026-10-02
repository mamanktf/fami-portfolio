"use client";

import { motion } from "framer-motion";

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
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-sm text-emerald-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Career Journey
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4">

          {experiences.map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              className="relative mb-14 pl-10"
            >

              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />

              <span className="text-sm font-semibold text-emerald-400">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-zinc-400">
                {item.company}
              </p>

              <p className="mt-4 leading-8 text-zinc-500">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}