import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "ascii";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border border-[var(--color-border)]",
  ].join(" "),
  bordered: [
    "bg-[var(--color-surface-1)]",
    "border-2 border-[var(--color-accent)]",
  ].join(" "),
  ascii: ["bg-[var(--color-surface-1)]"].join(" "),
};

function AsciiHeader({ title }: { title: string }) {
  const padded = ` ${title} `;
  const dashes = "-".repeat(Math.max(padded.length, 10));
  return (
    <pre className="text-[var(--color-accent)] text-xs leading-tight mb-2 select-none">
      {`+${dashes}+\n|${padded.padEnd(dashes.length)}|\n+${dashes}+`}
    </pre>
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
        whileHover: { y: -1, boxShadow: "var(--shadow-glow)" },
        transition: transitions.smooth,
      }
    : {};

  if (variant === "ascii") {
    return (
      <Comp
        className={cn("p-4 transition-colors", variantStyles[variant], className)}
        {...motionProps}
      >
        {title && <AsciiHeader title={title} />}
        <div className="border-l border-[var(--color-border)] pl-3">
          {children}
        </div>
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
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
          {`> ${title}`}
        </div>
      )}
      {children}
    </Comp>
  );
}
