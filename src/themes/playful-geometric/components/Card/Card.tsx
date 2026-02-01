import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "featured";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border-2 border-[var(--color-text-primary)]",
    "shadow-[var(--shadow-md)]",
  ].join(" "),
  featured: [
    "bg-[var(--color-surface-1)]",
    "border-2 border-[var(--color-text-primary)]",
    "shadow-[var(--shadow-secondary)]",
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
          rotate: -1.5,
          scale: 1.02,
          boxShadow: "6px 6px 0px 0px #1E293B",
        },
        transition: transitions.bouncy,
      }
    : {};

  return (
    <Comp
      className={cn(
        "rounded-[var(--radius-lg)] p-6",
        "font-[var(--font-body)]",
        variantStyles[variant],
        className,
      )}
      {...motionProps}
    >
      {title && (
        <h3 className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-text-primary)] mb-3">
          {title}
        </h3>
      )}
      {children}
    </Comp>
  );
}
