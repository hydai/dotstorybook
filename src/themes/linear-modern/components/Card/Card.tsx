import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "gradient";
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
    "shadow-[var(--shadow-md)]",
  ].join(" "),
  glass: [
    "bg-[var(--color-surface-1)]/60",
    "border border-[var(--color-border)]",
    "backdrop-blur-xl",
    "shadow-[var(--shadow-md)]",
  ].join(" "),
  gradient: [
    "bg-gradient-to-br from-[var(--color-surface-1)] to-[var(--color-surface-2)]",
    "border border-[var(--color-border)]",
    "shadow-[var(--shadow-lg)]",
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
        whileHover: { y: -2, boxShadow: "var(--shadow-lg)" },
        transition: transitions.smooth,
      }
    : {};

  return (
    <Comp
      className={cn(
        "rounded-[var(--radius-lg)] p-6 transition-colors",
        hoverable && "hover:border-[var(--color-border-hover)] cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {children}
    </Comp>
  );
}
