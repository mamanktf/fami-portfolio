"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-200
            bg-white/60
            p-6
            backdrop-blur
            dark:border-zinc-800
            dark:bg-zinc-900/50
            sm:p-10
            lg:p-14
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-64
              w-64
              rounded-full
              bg-emerald-500/5
              blur-3xl
            "
          />

          <div className="relative">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-emerald-500
              "
            >
              CONTACT
            </p>

            <h2
              className="
                mt-4
                max-w-3xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              Let's create something{" "}
              <span className="text-emerald-500">
                meaningful.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
                sm:text-base
                sm:leading-8
              "
            >
              Have a project, collaboration, or creative opportunity?
              Feel free to reach out and let's discuss how we can work
              together.
            </p>

            <div
              className="
                mt-8
                grid
                gap-4
                sm:mt-10
                sm:grid-cols-2
              "
            >
              {/* Email */}
              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=firdausfami14@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white/50
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500
                  dark:border-zinc-800
                  dark:bg-zinc-950/40
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-500/10
                      text-emerald-500
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium">
                     firdausfami14@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-400
                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-emerald-500
                  "
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white/50
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500
                  dark:border-zinc-800
                  dark:bg-zinc-950/40
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-500/10
                      text-emerald-500
                    "
                  >
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Let's Talk
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-400
                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-emerald-500
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}