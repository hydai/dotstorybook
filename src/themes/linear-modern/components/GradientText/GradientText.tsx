import React from "react";
import { cn } from "@/shared/utils/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "shimmer";
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className,
  variant = "default",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent",
        variant === "default" &&
          "bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-mid)] to-[var(--color-gradient-end)]",
        variant === "shimmer" && [
          "bg-[length:200%_auto]",
          "bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-mid)] to-[var(--color-gradient-start)]",
          "animate-[shimmer_3s_linear_infinite]",
        ],
        className
      )}
    >
      {children}
    </Tag>
  );
}
