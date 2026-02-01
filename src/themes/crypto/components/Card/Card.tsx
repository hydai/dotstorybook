import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "pricing";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border border-white/10",
    "rounded-2xl",
  ].join(" "),
  glass: [
    "bg-black/40",
    "backdrop-blur-lg",
    "border border-white/10",
    "rounded-2xl",
  ].join(" "),
  pricing: [
    "bg-[var(--color-surface-1)]",
    "border-2 border-[var(--color-accent)]",
    "rounded-2xl",
    "shadow-[var(--shadow-glow-lg)]",
  ].join(" "),
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
          y: -4,
          boxShadow:
            "0 4px 24px rgba(247, 147, 26, 0.15), 0 0 48px rgba(247, 147, 26, 0.05)",
        },
        transition: transitions.smooth,
      }
    : {};

  return (
    <Comp
      className={cn(
        "p-6 transition-colors",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {title && (
        <div className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3 font-[var(--font-heading)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
