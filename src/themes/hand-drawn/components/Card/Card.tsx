import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "postit" | "speech-bubble";
  decoration?: "tape" | "tack" | "none";
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: [
    "bg-[var(--color-surface-1)]",
    "border-[3px] border-[var(--color-border)]",
  ].join(" "),
  postit: [
    "bg-[var(--color-postit)]",
    "border-[3px] border-[var(--color-border)]",
  ].join(" "),
  "speech-bubble": [
    "bg-[var(--color-surface-1)]",
    "border-[3px] border-[var(--color-border)]",
    "hd-speech-tail",
  ].join(" "),
};

const wobblyRadius = "48% 52% 45% 55% / 52% 48% 55% 45%";
const postitRadius = "2% 4% 3% 2% / 3% 2% 4% 3%";

export function Card({
  children,
  variant = "default",
  decoration = "none",
  className,
  hoverable = false,
}: CardProps) {
  const Comp = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: { rotate: -1.5, y: -4 },
        whileTap: { rotate: 0, y: 0 },
        transition: transitions.snappy,
      }
    : {};

  const radius =
    variant === "postit"
      ? postitRadius
      : variant === "speech-bubble"
        ? "48% 52% 45% 55% / 52% 48% 55% 45%"
        : wobblyRadius;

  const rotation = variant === "postit" ? "rotate(-1.5deg)" : undefined;

  return (
    <Comp
      style={{
        borderRadius: radius,
        transform: rotation,
        boxShadow: "3px 3px 0px 0px rgba(45, 45, 45, 0.1)",
      }}
      className={cn(
        "relative p-8",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        decoration === "tape" && "hd-tape",
        decoration === "tack" && "hd-tack",
        className,
      )}
      {...motionProps}
    >
      {children}
    </Comp>
  );
}
