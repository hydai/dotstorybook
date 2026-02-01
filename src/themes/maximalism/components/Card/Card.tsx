import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "featured" | "wild";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]/80 backdrop-blur-sm",
    "border-4 border-[#FF3AF2]",
    "rounded-3xl",
    "shadow-[4px_4px_0_#FF3AF2,8px_8px_0_#00F5D4,12px_12px_0_#FFE600]",
  ].join(" "),
  featured: [
    "bg-[var(--color-surface-1)]/80 backdrop-blur-sm",
    "border-4 border-[#FFE600]",
    "rounded-3xl",
    "shadow-[4px_4px_0_#FFE600,8px_8px_0_#FF3AF2,12px_12px_0_#00F5D4]",
    "rotate-1",
  ].join(" "),
  wild: [
    "bg-[var(--color-surface-1)]/80 backdrop-blur-sm",
    "border-8 border-dotted border-[#00F5D4]",
    "rounded-3xl",
    "shadow-[4px_4px_0_#00F5D4,8px_8px_0_#FF6B35]",
    "-rotate-2 translate-y-1",
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
        whileHover: {
          scale: 1.03,
          rotate: variant === "featured" ? 2 : -1,
          boxShadow:
            "6px 6px 0 #FF3AF2, 12px 12px 0 #00F5D4, 18px 18px 0 #FFE600",
        },
        transition: transitions.bouncy,
      }
    : {};

  return (
    <Comp
      className={cn(
        "p-6 transition-colors",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {title && (
        <div className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-3 font-[var(--font-heading)] max-text-shadow-sm">
          {title}
        </div>
      )}
      {children}
    </Comp>
  );
}
