import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "ornate";
  title?: string;
  volume?: string;
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
    "border-2 border-[var(--color-accent)]",
    "rounded-[var(--radius-md)]",
  ].join(" "),
  ornate: [
    "bg-[var(--color-surface-1)]",
    "border-2 border-[var(--color-accent)]",
    "rounded-[var(--radius-md)]",
  ].join(" "),
};

function CornerFlourishes() {
  return (
    <>
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
    </>
  );
}

export function Card({
  children,
  variant = "default",
  title,
  volume,
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
        "relative p-6 transition-all duration-500",
        hoverable &&
          "hover:border-[var(--color-border-hover)] cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {variant === "ornate" && <CornerFlourishes />}
      {volume && (
        <div className="absolute top-4 right-4 text-7xl font-[var(--font-display)] text-[var(--color-text-primary)] opacity-[0.08] leading-none pointer-events-none select-none">
          {volume}
        </div>
      )}
      {title && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-3 font-[var(--font-display)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
