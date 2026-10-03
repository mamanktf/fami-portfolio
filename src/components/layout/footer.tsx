import { Mail } from "lucide-react";

import Container from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container>
        <div
          className="
            flex
            flex-col
            gap-6
            py-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-tight">
              {siteConfig.brand}
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Creative Multimedia Portfolio
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {/* Email */}
           <a
href="https://mail.google.com/mail/?view=cm&fs=1&to=firdausfami14@gmail.com"
  className="
    inline-flex
    h-10
    items-center
    gap-2
    rounded-xl
    border
    border-zinc-200
    px-4
    text-sm
    text-zinc-500
    transition
    hover:border-emerald-500
    hover:text-emerald-500
    dark:border-zinc-800
  "
>
  <Mail size={17} />
  Email
</a>

            {/* Instagram */}
                <a
          href="https://www.instagram.com/mamanktf/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            h-10
            items-center
            rounded-xl
            border
            border-zinc-200
            px-4
            text-sm
            text-zinc-500
            transition
            hover:border-emerald-500
            hover:text-emerald-500
            dark:border-zinc-800
          "
        >
          Instagram
        </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@famifirdaus2351"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-10
                items-center
                rounded-xl
                border
                border-zinc-200
                px-4
                text-sm
                text-zinc-500
                transition
                hover:border-emerald-500
                hover:text-emerald-500
                dark:border-zinc-800
              "
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-200 py-5 dark:border-zinc-800">
          <p className="text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}