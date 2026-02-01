import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "terminal" | "holographic";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
    "cyber-chamfer-md",
  ].join(" "),
  terminal: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-accent)]",
  ].join(" "),
  holographic: [
    "bg-[var(--color-surface-1)]/60",
    "border border-[var(--color-border)]",
    "backdrop-blur-md",
  ].join(" "),
};

function TerminalHeader({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-accent)] bg-[var(--color-surface-0)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-error)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warning)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-success)]" />
      {title && (
        <span className="ml-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] font-[var(--font-label)]">
          {title}
        </span>
      )}
    </div>
  );
}

function HolographicCorners() {
  const cornerSize = "w-3 h-3";
  return (
    <>
      <span
        className={cn(
          "absolute top-0 left-0",
          cornerSize,
          "border-t-2 border-l-2 border-[var(--color-accent)]"
        )}
      />
      <span
        className={cn(
          "absolute top-0 right-0",
          cornerSize,
          "border-t-2 border-r-2 border-[var(--color-secondary)]"
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-0",
          cornerSize,
          "border-b-2 border-l-2 border-[var(--color-tertiary)]"
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 right-0",
          cornerSize,
          "border-b-2 border-r-2 border-[var(--color-secondary)]"
        )}
      />
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
        whileHover: { y: -2, boxShadow: "var(--shadow-glow)" },
        transition: transitions.smooth,
      }
    : {};

  if (variant === "terminal") {
    return (
      <Comp
        className={cn(
          "overflow-hidden transition-colors",
          hoverable &&
            "hover:border-[var(--color-border-hover)] cursor-pointer",
          variantStyles[variant],
          className
        )}
        {...motionProps}
      >
        <TerminalHeader title={title} />
        <div className="p-4">{children}</div>
      </Comp>
    );
  }

  if (variant === "holographic") {
    return (
      <Comp
        className={cn(
          "relative p-6 transition-colors",
          hoverable &&
            "hover:border-[var(--color-border-hover)] cursor-pointer",
          variantStyles[variant],
          className
        )}
        {...motionProps}
      >
        <HolographicCorners />
        {title && (
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3 font-[var(--font-heading)]">
            {title}
          </div>
        )}
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        "p-6 transition-colors",
        hoverable && "hover:border-[var(--color-border-hover)] cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {title && (
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3 font-[var(--font-heading)]">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
