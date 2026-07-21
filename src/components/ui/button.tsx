import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary"
          ? `
            bg-emerald-500
            text-white

            hover:-translate-y-1
            hover:bg-emerald-600
            hover:shadow-lg
            hover:shadow-emerald-500/30
          `
          : `
            border
            border-zinc-300
            bg-transparent
            text-zinc-900

            hover:-translate-y-1
            hover:bg-zinc-100

            dark:border-zinc-700
            dark:text-white
            dark:hover:bg-zinc-800
          `,

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}