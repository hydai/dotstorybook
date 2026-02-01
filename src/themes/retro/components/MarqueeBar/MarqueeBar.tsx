import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface MarqueeBarProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function MarqueeBar({
  children,
  speed = 80,
  className,
}: MarqueeBarProps) {
  return (
    <div
      className={cn("bg-[#C0C0C0] py-2", className)}
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.outset,
        borderRadius: 0,
        boxShadow: shadows.outset,
      }}
      aria-live="polite"
    >
      <Marquee gradient={false} pauseOnHover speed={speed}>
        <span className="font-bold text-sm font-[var(--font-body)] px-8">
          {children}
        </span>
      </Marquee>
    </div>
  );
}
