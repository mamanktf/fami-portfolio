"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";

export default function FeaturedProject() {
  return (
    <section className="scroll-mt-24 py-20">
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Featured Project
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Web & Mobile Apps
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span
              className="
                inline-flex
                rounded-full
                bg-emerald-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-500
              "
            >
              In Development
            </span>

            <h3 className="mt-5 text-5xl font-bold leading-tight">
              COMING
              <br />
              SOON
            </h3>

            <p className="mt-6 max-w-xl leading-8 text-zinc-600 dark:text-zinc-400">
              New web and mobile application projects are currently in
              development. More projects and case studies will be available
              soon.
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Development",
                "Mobile App",
                "UI/UX",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-zinc-200
                    bg-white/60
                    px-5
                    py-2
                    text-sm
                    text-zinc-600

                    dark:border-zinc-800
                    dark:bg-zinc-900/50
                    dark:text-zinc-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Status */}
            <div className="mt-10">
              <span
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-zinc-200
                  bg-white/60
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-zinc-500

                  dark:border-zinc-800
                  dark:bg-zinc-900/50
                  dark:text-zinc-400
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                Projects in Development
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="
                flex
                aspect-video
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200
                bg-zinc-50
                shadow-xl

                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <div className="text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                  Web & Mobile
                </p>

                <h4 className="mt-4 text-4xl font-bold">
                  Coming Soon
                </h4>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                  New digital experiences are currently being developed.
                </p>

              </div>
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}