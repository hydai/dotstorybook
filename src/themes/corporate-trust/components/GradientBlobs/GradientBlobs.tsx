import React from "react";
import { cn } from "@/shared/utils/cn";

interface GradientBlobsProps {
  children?: React.ReactNode;
  className?: string;
}

export function GradientBlobs({ children, className }: GradientBlobsProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Indigo blob — top left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.6) 0%, transparent 70%)",
          animation: "corporate-float 12s ease-in-out infinite",
        }}
      />

      {/* Violet blob — top right */}
      <div
        className="absolute -top-16 -right-24 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)",
          animation: "corporate-float 15s ease-in-out infinite reverse",
        }}
      />

      {/* Emerald blob — bottom center */}
      <div
        className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, transparent 70%)",
          animation: "corporate-float 18s ease-in-out infinite 2s",
        }}
      />

      {/* Content on top of blobs */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
