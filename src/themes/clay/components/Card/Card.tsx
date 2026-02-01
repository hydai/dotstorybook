import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "highlighted";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: ["bg-white/70", "rounded-[32px]"].join(" "),
  glass: ["bg-white/60", "backdrop-blur-xl", "rounded-[32px]"].join(" "),
  highlighted: [
    "bg-gradient-to-br from-white/80 to-white/60",
    "border-2 border-[var(--color-accent)]/20",
    "rounded-[32px]",
  ].join(" "),
};

const variantShadows: Record<NonNullable<CardProps["variant"]>, string> = {
  default: shadows.clayCard,
  glass: shadows.clayCard,
  highlighted: shadows.claySurface,
};

export function Card({
  children,
  variant = "default",
  title,
  className,
  hoverable = false,
}: CardProps) {
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: {
          y: -8,
          boxShadow: shadows.clayHoverCard,
        },
        transition: transitions.bouncy,
      }
    : {};

  return (
    <Comp
      className={cn(
        "p-8 transition-colors",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      style={{ boxShadow: variantShadows[variant] }}
      {...motionProps}
    >
      {title && (
        <div className="text-sm font-bold text-[var(--color-text-secondary)] mb-4 font-[var(--font-heading)] uppercase tracking-wider">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
