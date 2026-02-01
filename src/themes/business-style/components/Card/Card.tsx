import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "editorial";
  title?: string;
  goldAccent?: boolean;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
    "rounded-[var(--radius-md)]",
  ].join(" "),
  bordered: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
    "border-t-2 border-t-[var(--color-accent)]",
    "rounded-[var(--radius-md)]",
  ].join(" "),
  editorial: [
    "bg-transparent",
    "border-t border-b border-[var(--color-border)]",
    "border-l-0 border-r-0",
    "rounded-none",
  ].join(" "),
};

export function Card({
  children,
  variant = "default",
  title,
  goldAccent = false,
  className,
  hoverable = false,
}: CardProps) {
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: { y: -2 },
        whileTap: { y: 0 },
        transition: transitions.base,
      }
    : {};

  return (
    <Comp
      className={cn(
        "relative p-6 transition-all duration-300",
        hoverable && "cursor-pointer",
        goldAccent && variant !== "bordered" && "business-card-gold-accent",
        variantStyles[variant],
        className
      )}
      style={
        hoverable
          ? {
              boxShadow: shadows.sm,
            }
          : undefined
      }
      onMouseEnter={
        hoverable
          ? (e: React.MouseEvent<HTMLDivElement>) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                shadows.cardHover;
            }
          : undefined
      }
      onMouseLeave={
        hoverable
          ? (e: React.MouseEvent<HTMLDivElement>) => {
              (e.currentTarget as HTMLElement).style.boxShadow = shadows.sm;
            }
          : undefined
      }
      {...motionProps}
    >
      {title && (
        <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3 font-[var(--font-mono)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
