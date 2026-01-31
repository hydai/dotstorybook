import React from "react";
import { cn } from "@/shared/utils/cn";

interface MarqueeTextProps {
  children: React.ReactNode;
  speed?: "fast" | "medium" | "slow";
  reverse?: boolean;
  className?: string;
  accentBg?: boolean;
}

const speedDurations: Record<NonNullable<MarqueeTextProps["speed"]>, string> = {
  fast: "10s",
  medium: "20s",
  slow: "35s",
};

export function MarqueeText({
  children,
  speed = "medium",
  reverse = false,
  className,
  accentBg = false,
}: MarqueeTextProps) {
  return (
    <div
      className={cn(
        "kinetic-marquee w-full overflow-hidden select-none",
        accentBg
          ? "bg-[var(--color-accent)] text-[var(--color-text-inverse)]"
          : "text-[var(--color-text-primary)]",
        className
      )}
    >
      <div
        className={cn(
          "kinetic-marquee-track",
          reverse && "kinetic-marquee-track--reverse"
        )}
        style={
          { "--marquee-duration": speedDurations[speed] } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
