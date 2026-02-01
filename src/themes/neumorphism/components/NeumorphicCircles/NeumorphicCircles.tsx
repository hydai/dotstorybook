import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface NeumorphicCirclesProps {
  rings?: number;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const sizeBase: Record<NonNullable<NeumorphicCirclesProps["size"]>, number> = {
  sm: 48,
  md: 64,
  lg: 80,
};

export function NeumorphicCircles({
  rings = 4,
  size = "md",
  animated = false,
  className,
}: NeumorphicCirclesProps) {
  const base = sizeBase[size];
  const ringArray = Array.from({ length: rings }, (_, i) => i);

  return (
    <div
      className={cn(
        "pointer-events-none relative flex items-center justify-center",
        className
      )}
      style={{
        width: base * rings * 2,
        height: base * rings * 2,
        animation: animated ? "neu-float 3s ease-in-out infinite" : undefined,
      }}
    >
      {ringArray.map((i) => {
        const ringSize = base * (rings - i) * 2;
        const isExtruded = i % 2 === 0;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-[#E0E5EC]"
            style={{
              width: ringSize,
              height: ringSize,
              boxShadow: isExtruded ? shadows.extruded : shadows.inset,
            }}
          />
        );
      })}
    </div>
  );
}
