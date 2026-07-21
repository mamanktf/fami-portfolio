import { HTMLAttributes } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary";
}

export default function Badge({
  variant = "primary",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium transition-all duration-300",

        variant === "primary"
          ? `
            border-[var(--primary)]/30
            bg-[color:color-mix(in_srgb,var(--primary)_10%,transparent)]
            text-[var(--primary)]
            `
          : `
            border-[var(--border)]
            bg-[var(--secondary)]
            text-[var(--foreground)]
          `,

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}