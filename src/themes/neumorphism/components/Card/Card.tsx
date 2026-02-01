import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "flat" | "accent";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: ["bg-[#E0E5EC]", "rounded-[32px]"].join(" "),
  flat: ["bg-[#E0E5EC]", "rounded-[32px]"].join(" "),
  accent: [
    "bg-[#E0E5EC]",
    "border-2 border-[var(--color-accent)]/15",
    "rounded-[32px]",
  ].join(" "),
};

const variantShadows: Record<NonNullable<CardProps["variant"]>, string> = {
  default: shadows.extruded,
  flat: shadows.extrudedSmall,
  accent: shadows.extrudedHover,
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
          y: -2,
          boxShadow: shadows.extrudedHover,
        },
        transition: transitions.smooth,
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
