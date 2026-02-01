import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions, shadows } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "panel" | "recessed";
  title?: string;
  className?: string;
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-[var(--color-surface-0)] rounded-[var(--radius-lg)]",
  panel: "bg-[var(--color-surface-0)] rounded-[var(--radius-lg)]",
  recessed: "bg-[var(--color-surface-2)] rounded-[var(--radius-lg)]",
};

function CornerScrew({ position }: { position: string }) {
  return (
    <span
      className={cn("absolute w-2 h-2 rounded-full", position)}
      style={{
        background:
          "radial-gradient(circle at 35% 35%, #f0f2f5 0%, #c8cfd8 50%, #a3b1c6 100%)",
        boxShadow:
          "inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(163, 177, 198, 0.4)",
      }}
    />
  );
}

function VentSlots() {
  return (
    <div className="flex gap-1.5 justify-center mt-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-6 h-1 rounded-full"
          style={{
            boxShadow:
              "inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff",
            backgroundColor: "#d1d9e6",
          }}
        />
      ))}
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
        whileHover: {
          y: -4,
          boxShadow: shadows.hoverCard,
        },
        transition: transitions.smooth,
      }
    : {};

  const isRecessed = variant === "recessed";

  return (
    <Comp
      className={cn(
        "relative p-8 transition-colors",
        hoverable && "cursor-pointer",
        variantStyles[variant],
        className
      )}
      style={{
        boxShadow: isRecessed ? shadows.recessed : shadows.card,
      }}
      {...motionProps}
    >
      {variant === "panel" && (
        <>
          <CornerScrew position="top-3 left-3" />
          <CornerScrew position="top-3 right-3" />
          <CornerScrew position="bottom-3 left-3" />
          <CornerScrew position="bottom-3 right-3" />
        </>
      )}

      {title && (
        <div className="text-xs font-medium text-[var(--color-text-muted)] mb-4 font-[var(--font-mono)] uppercase tracking-[0.15em]">
          {title}
        </div>
      )}

      {children}

      {variant === "panel" && <VentSlots />}
    </Comp>
  );
}
