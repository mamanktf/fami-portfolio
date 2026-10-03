"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "./theme-toggle";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-background/80 backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <div className="flex h-16 items-center justify-between">

          {/* Brand */}

          <a
            href="#home"
            onClick={handleMenuClick}
            className="text-xl font-bold tracking-tight"
          >
            {siteConfig.brand}
          </a>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  text-zinc-400
                  transition
                  hover:text-emerald-400
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ================= ACTIONS ================= */}

          <div className="flex items-center gap-2">

            <ThemeToggle />

            {/* Mobile Hamburger */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-800
                text-zinc-300
                transition
                hover:border-emerald-500
                hover:text-emerald-400
                md:hidden
              "
            >
              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-full
            z-50
            border-b
            border-zinc-800/70
            bg-zinc-950/65
            px-6
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col gap-1 py-4">

            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMenuClick}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-zinc-300
                  transition
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                {item.name}
              </a>
            ))}

          </nav>
        </div>

        {/* ================= MOBILE OVERLAY ================= */}

        <div
          onClick={handleMenuClick}
          className={`
            fixed
            inset-0
            z-40
            bg-black/15
            backdrop-blur-sm
            transition-opacity
            duration-300
            md:hidden
            ${
              menuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
        />

      </div>
    </header>
  );
}