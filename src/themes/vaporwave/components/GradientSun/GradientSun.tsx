import React from "react";
import { cn } from "@/shared/utils/cn";

interface GradientSunProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig: Record<NonNullable<GradientSunProps["size"]>, string> = {
  sm: "w-[200px] h-[200px]",
  md: "w-[400px] h-[400px]",
  lg: "w-[600px] h-[600px]",
};

export function GradientSun({ className, size = "lg" }: GradientSunProps) {
  return (
    <div
      className={cn(
        "pointer-events-none rounded-full blur-[100px] opacity-60",
        sizeConfig[size],
        className
      )}
      style={{
        background: "linear-gradient(180deg, #FF9900 0%, #FF00FF 100%)",
      }}
    />
  );
}
