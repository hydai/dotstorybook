import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "decorative";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-2)]",
    "border border-[var(--color-border)]",
  ].join(" "),
  bordered: [
    "bg-[var(--color-surface-2)]",
    "border-2 border-[var(--color-accent)]",
  ].join(" "),
  decorative: [
    "bg-[var(--color-surface-2)]",
    "border border-[var(--color-border)]",
  ].join(" "),
};

function CornerBrackets() {
  return (
    <>
      {/* Top-left bracket */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--color-accent)]" />
      {/* Bottom-right bracket */}
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--color-accent)]" />
    </>
  );
}

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
          boxShadow:
            "0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)",
        },
        transition: transitions.slow,
      }
    : {};

  return (
    <Comp
      className={cn(
        "relative p-6 transition-all duration-500",
        hoverable &&
          "hover:border-[var(--color-border-hover)] cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {variant === "decorative" && <CornerBrackets />}
      {title && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-3 font-[var(--font-heading)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
