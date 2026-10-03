"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";

export default function FeaturedProject() {
  return (
    <section className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Featured Project
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              sm:mt-5
              sm:text-5xl
            "
          >
            Web & Mobile Apps
          </h2>
        </motion.div>

        {/* Content */}
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Status Badge */}

            <span
              className="
                inline-flex
                rounded-full
                bg-emerald-500/10
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-emerald-500
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              In Development
            </span>

            {/* Coming Soon Heading */}

            <h3
              className="
                mt-4
                text-4xl
                font-bold
                leading-[1.05]
                sm:mt-5
                sm:text-5xl
              "
            >
              COMING
              <br />
              SOON
            </h3>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-zinc-600
                dark:text-zinc-400
                sm:mt-6
                sm:leading-8
              "
            >
              New web and mobile application projects are currently in
              development. More projects and case studies will be available
              soon.
            </p>

            {/* Technologies */}

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
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
                    px-4
                    py-1.5
                    text-xs
                    text-zinc-600

                    dark:border-zinc-800
                    dark:bg-zinc-900/50
                    dark:text-zinc-300

                    sm:px-5
                    sm:py-2
                    sm:text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Status */}

            <div className="mt-7 sm:mt-10">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-zinc-200
                  bg-white/60
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-zinc-500

                  dark:border-zinc-800
                  dark:bg-zinc-900/50
                  dark:text-zinc-400

                  sm:gap-3
                  sm:px-5
                  sm:py-3
                  sm:text-sm
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
              <div className="px-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500 sm:text-sm">
                  Web & Mobile
                </p>

                <h4 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">
                  Coming Soon
                </h4>

                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm">
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