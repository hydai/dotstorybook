import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors } from "../../tokens";

interface ConstructionBannerProps {
  children?: React.ReactNode;
  className?: string;
}

export function ConstructionBanner({
  children,
  className,
}: ConstructionBannerProps) {
  return (
    <div
      className={cn("bg-construction p-4", className)}
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.outset,
        borderRadius: 0,
        boxShadow: shadows.outset,
      }}
    >
      <div className="bg-[#FFFF00] px-4 py-2 text-center">
        <span className="font-bold text-black text-lg uppercase font-[var(--font-heading)] tracking-wider">
          {children || "\u26A0 UNDER CONSTRUCTION \u26A0"}
        </span>
      </div>
    </div>
  );
}
