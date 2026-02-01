import React from "react";
import { cn } from "@/shared/utils/cn";

interface PaperTextureProps {
  children: React.ReactNode;
  intensity?: "subtle" | "medium";
  className?: string;
}

export function PaperTexture({
  children,
  intensity = "subtle",
  className,
}: PaperTextureProps) {
  return (
    <div
      className={cn(
        "business-paper-overlay",
        intensity === "medium" && "business-paper-overlay--medium",
        className
      )}
    >
      {children}
    </div>
  );
}
