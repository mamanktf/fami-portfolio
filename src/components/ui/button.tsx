import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const className = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-5
    py-3
    text-sm
    font-semibold
    transition-all
    duration-300
    ${
      variant === "primary"
        ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
        : "border border-zinc-300 bg-white/50 text-zinc-800 hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200"
    }
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}