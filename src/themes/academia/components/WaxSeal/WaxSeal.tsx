import React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/utils/cn";

interface WaxSealProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const sizeStyles: Record<NonNullable<WaxSealProps["size"]>, string> = {
  sm: "w-12 h-12 text-[10px]",
  md: "w-16 h-16 text-xs",
  lg: "w-20 h-20 text-sm",
};

export function WaxSeal({
  children,
  size = "md",
  animated = false,
  className,
}: WaxSealProps) {
  const classes = cn(
    "academia-wax-seal",
    sizeStyles[size],
    className
  );

  if (animated) {
    return (
      <motion.div
        className={classes}
        initial={{ opacity: 0, scale: 1.6, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
