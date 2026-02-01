import React from "react";
import { cn } from "@/shared/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "pencil" | "red" | "blue" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  pencil:
    "bg-[var(--color-surface-3)] text-[var(--color-text-primary)] border-[2px] border-[var(--color-border)]",
  red: "bg-[var(--color-accent)] text-[var(--color-text-inverse)] border-[2px] border-[var(--color-border)]",
  blue: "bg-[var(--color-secondary)] text-[var(--color-text-inverse)] border-[2px] border-[var(--color-border)]",
  outline:
    "bg-transparent text-[var(--color-text-primary)] border-[2px] border-dashed border-[var(--color-border-dashed)]",
};

const wobblyRadius = "42% 58% 50% 50% / 55% 45% 55% 45%";

export function Badge({
  children,
  variant = "pencil",
  className,
}: BadgeProps) {
  return (
    <span
      style={{
        borderRadius: wobblyRadius,
        boxShadow:
          variant !== "outline" ? "2px 2px 0px 0px #2d2d2d" : undefined,
      }}
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-sm font-bold font-[var(--font-body)] transition-colors",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
