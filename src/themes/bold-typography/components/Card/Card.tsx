import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";
import { transitions } from "../../tokens";
import { Badge } from "../Badge";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "featured";
  className?: string;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-transparent",
  bordered: "bg-transparent border border-[var(--color-border)]",
  featured: "bg-transparent border-2 border-[var(--color-accent)]",
};

export function Card({
  children,
  variant = "default",
  className,
}: CardProps) {
  const Comp = variant === "bordered" ? motion.div : "div";
  const motionProps =
    variant === "bordered"
      ? {
          whileHover: { borderColor: "var(--color-border-hover)" },
          transition: transitions.standard,
        }
      : {};

  return (
    <Comp
      className={cn(
        "relative p-6 md:p-8 transition-colors",
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {variant === "featured" && (
        <div className="absolute top-0 right-0 translate-x-0 -translate-y-1/2">
          <Badge variant="accent">Featured</Badge>
        </div>
      )}
      {children}
    </Comp>
  );
}
