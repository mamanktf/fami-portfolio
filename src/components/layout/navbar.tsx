import ThemeToggle from "./theme-toggle";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-10 px-6">

        {/* Brand */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          {siteConfig.brand}
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-emerald-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}