import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "terminal" | "explorer";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

function TerminalHeader({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-secondary)] bg-[var(--color-surface-0)]">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-tertiary)]" />
      {title && (
        <span className="ml-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] font-[var(--font-label)]">
          {title}
        </span>
      )}
    </div>
  );
}

function ExplorerStatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 border-t border-[var(--color-border)] bg-[var(--color-surface-0)] text-[10px] text-[var(--color-text-muted)] font-[var(--font-label)]">
      <span>READY</span>
      <span>UTF-8</span>
    </div>
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
          "bg-[var(--color-surface-1)] border border-[var(--color-secondary)]",
          hoverable &&
            "hover:border-[var(--color-border-hover)] cursor-pointer",
          className
        )}
        style={{
          boxShadow:
            "0 0 10px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.1)",
        }}
        {...motionProps}
      >
        <TerminalHeader title={title} />
        <div className="p-4">{children}</div>
      </Comp>
    );
  }

  if (variant === "explorer") {
    return (
      <Comp
        className={cn(
          "overflow-hidden transition-colors",
          "bg-[var(--color-surface-1)] border border-[var(--color-border)]",
          hoverable &&
            "hover:border-[var(--color-border-hover)] cursor-pointer",
          className
        )}
        {...motionProps}
      >
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface-0)]">
          {title && (
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] font-[var(--font-label)]">
              {title}
            </span>
          )}
        </div>
        <div className="p-4">{children}</div>
        <ExplorerStatusBar />
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        "relative p-6 transition-colors",
        "bg-[var(--color-surface-1)]/60 backdrop-blur-md",
        "border-l border-r border-[var(--color-accent)]/30",
        "border-t-2 border-t-[var(--color-secondary)]",
        "border-b border-b-[var(--color-border)]",
        hoverable && "hover:border-[var(--color-border-hover)] cursor-pointer",
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
