import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "highlighted";
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-white",
    "rounded-xl",
    "border border-slate-100",
  ].join(" "),
  glass: [
    "bg-white/80 backdrop-blur-lg",
    "rounded-xl",
    "border border-white/60",
  ].join(" "),
  highlighted: [
    "bg-white",
    "rounded-xl",
    "ring-2 ring-indigo-100 border border-indigo-50",
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
        whileHover: { y: -4 },
        whileTap: { y: 0 },
        transition: transitions.smooth,
      }
    : {};

  return (
    <Comp
      className={cn(
        "relative p-6 transition-all duration-200",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      style={{
        boxShadow: shadows.card,
      }}
      {...(hoverable
        ? {
            ...motionProps,
            onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.boxShadow = shadows.hoverCard;
            },
            onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.boxShadow = shadows.card;
            },
          }
        : motionProps)}
    >
      {children}
    </Comp>
  );
}
