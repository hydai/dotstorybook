import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface DropCapProps {
  children: React.ReactNode;
  animated?: boolean;
  className?: string;
}

export function DropCap({
  children,
  animated = false,
  className,
}: DropCapProps) {
  if (!animated) {
    return (
      <p
        className={cn(
          "academia-drop-cap text-base leading-relaxed text-[var(--color-text-primary)] font-[var(--font-body)]",
          className
        )}
      >
        {children}
      </p>
    );
  }

  const text = typeof children === "string" ? children : "";
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);

  return (
    <p
      className={cn(
        "text-base leading-relaxed text-[var(--color-text-primary)] font-[var(--font-body)]",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transitions.dramatic}
        className="float-left font-[var(--font-display)] text-[4.5rem] leading-[0.8] pr-3 pt-1 text-[var(--color-accent)]"
      >
        {firstLetter}
      </motion.span>
      {rest}
    </p>
  );
}
