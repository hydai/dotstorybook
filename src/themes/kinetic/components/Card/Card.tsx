import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "invert";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-0)]",
    "border-2 border-[var(--color-border)]",
  ].join(" "),
  bordered: [
    "bg-[var(--color-surface-0)]",
    "border-2 border-[var(--color-text-primary)]",
  ].join(" "),
  invert: [
    "bg-[var(--color-surface-0)]",
    "border-2 border-[var(--color-border)]",
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
        whileHover:
          variant === "invert"
            ? { backgroundColor: "#DFE104", borderColor: "#DFE104" }
            : { borderColor: "#FAFAFA" },
        transition: transitions.smooth,
      }
    : {};

  return (
    <Comp
      className={cn(
        "group p-8 md:p-12 transition-colors",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {title && (
        <div
          className={cn(
            "text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300",
            variant === "invert"
              ? "text-[var(--color-text-muted)] group-hover:text-[var(--color-text-inverse)]"
              : "text-[var(--color-text-muted)]"
          )}
        >
          {title}
        </div>
      )}
      <div
        className={cn(
          variant === "invert" &&
            hoverable &&
            "[&_*]:transition-colors [&_*]:duration-300 group-hover:[&_h1]:text-[var(--color-text-inverse)] group-hover:[&_h2]:text-[var(--color-text-inverse)] group-hover:[&_h3]:text-[var(--color-text-inverse)] group-hover:[&_p]:text-[var(--color-text-inverse)]"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
