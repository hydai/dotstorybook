import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "clay" | "bordered";
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "shadow-[var(--shadow-md)]",
    "rounded-3xl",
  ].join(" "),
  clay: [
    "bg-[var(--color-surface-3)]",
    "rounded-3xl",
  ].join(" "),
  bordered: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
    "rounded-3xl",
  ].join(" "),
};

export function Card({
  children,
  variant = "default",
  className,
  hoverable = false,
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
        hoverable && "botanical-hover-bloom cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {children}
    </Comp>
  );
}
