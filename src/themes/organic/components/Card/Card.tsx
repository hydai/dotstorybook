import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "sand" | "bordered";
  className?: string;
  hoverable?: boolean;
  radiusPattern?: 0 | 1 | 2 | 3 | 4 | 5;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "shadow-[var(--shadow-md)]",
  ].join(" "),
  sand: ["bg-[var(--color-surface-3)]"].join(" "),
  bordered: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
  ].join(" "),
};

const radiusPatterns: Record<number, string> = {
  0: "rounded-[2rem]",
  1: "organic-radius-1",
  2: "organic-radius-2",
  3: "organic-radius-3",
  4: "organic-radius-4",
  5: "organic-radius-5",
};

export function Card({
  children,
  variant = "default",
  className,
  hoverable = false,
  radiusPattern = 0,
}: CardProps) {
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: { y: -4 },
        whileTap: { y: 0 },
        transition: transitions.slow,
      }
    : {};

  return (
    <Comp
      className={cn(
        "relative p-8 transition-all duration-500",
        radiusPatterns[radiusPattern],
        hoverable && "organic-hover-bloom cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {children}
    </Comp>
  );
}
