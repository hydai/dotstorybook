import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "highlighted";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-2)]",
    "border border-[var(--color-border)]",
  ].join(" "),
  glass: [
    "bg-[rgba(26,26,36,0.6)]",
    "backdrop-blur-[8px]",
    "border border-[var(--color-border)]",
  ].join(" "),
  highlighted: [
    "bg-[rgba(26,26,36,0.6)]",
    "backdrop-blur-[8px]",
    "border border-[var(--color-border-accent)]",
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
          y: -2,
          scale: 1.02,
          boxShadow:
            variant === "highlighted"
              ? "var(--shadow-border-glow)"
              : "var(--shadow-glow)",
        },
        transition: transitions.smooth,
      }
    : {};

  return (
    <Comp
      className={cn(
        "p-6 transition-all rounded-[var(--radius-lg)]",
        hoverable &&
          "hover:border-[var(--color-border-hover)] cursor-pointer",
        variant === "highlighted" && "shadow-[var(--shadow-border-glow)]",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {title && (
        <div className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)] mb-3 font-[var(--font-heading)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
