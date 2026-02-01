import React from "react";
import { cn } from "@/shared/utils/cn";
import { motion } from "motion/react";
import { transitions } from "../../tokens";

interface OrnateFrameProps {
  children: React.ReactNode;
  cornerSize?: "sm" | "md" | "lg";
  hoverable?: boolean;
  padding?: string;
  className?: string;
}

const cornerSizes: Record<NonNullable<OrnateFrameProps["cornerSize"]>, string> =
  {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

export function OrnateFrame({
  children,
  cornerSize = "md",
  hoverable = false,
  padding = "p-6",
  className,
}: OrnateFrameProps) {
  const size = cornerSizes[cornerSize];
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: { y: -4 },
        transition: transitions.slow,
      }
    : {};

  return (
    <Comp
      className={cn("relative", padding, className)}
      {...motionProps}
    >
      <div
        className={cn(
          "absolute top-0 left-0 border-t-2 border-l-2 border-[var(--color-accent)]",
          size
        )}
      />
      <div
        className={cn(
          "absolute top-0 right-0 border-t-2 border-r-2 border-[var(--color-accent)]",
          size
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 border-b-2 border-l-2 border-[var(--color-accent)]",
          size
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 right-0 border-b-2 border-r-2 border-[var(--color-accent)]",
          size
        )}
      />
      {children}
    </Comp>
  );
}
