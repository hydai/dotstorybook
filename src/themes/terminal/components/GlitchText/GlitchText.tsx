import React from "react";
import { cn } from "@/shared/utils/cn";

interface GlitchTextProps {
  children: string;
  className?: string;
  variant?: "glitch" | "flicker";
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GlitchText({
  children,
  className,
  variant = "glitch",
  as: Tag = "span",
}: GlitchTextProps) {
  if (variant === "flicker") {
    return (
      <Tag
        className={cn(
          "text-[var(--color-text-primary)] inline-block",
          className
        )}
        style={{ animation: "flicker 4s infinite" }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(
        "glitch-text text-[var(--color-text-primary)] inline-block",
        className
      )}
      data-text={children}
    >
      {children}
    </Tag>
  );
}
