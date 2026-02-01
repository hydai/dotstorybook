import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors, colors } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "window" | "inset";
  title?: string;
  className?: string;
}

export function Card({
  children,
  variant = "default",
  title,
  className,
}: CardProps) {
  if (variant === "window") {
    return (
      <div
        className={cn("bg-[#C0C0C0]", className)}
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: borderColors.outset,
          borderRadius: 0,
          boxShadow: shadows.outsetDeep,
        }}
      >
        {/* Win95 Title Bar */}
        <div
          className="flex items-center justify-between px-2 py-1"
          style={{
            background: `linear-gradient(90deg, ${colors.titleBar.start}, ${colors.titleBar.end})`,
          }}
        >
          <span className="text-white font-bold text-sm font-[var(--font-body)] truncate">
            {title || "Untitled"}
          </span>
          <div className="flex gap-0.5">
            {["_", "\u25A1", "\u00D7"].map((char) => (
              <button
                key={char}
                className="w-4 h-4 bg-[#C0C0C0] flex items-center justify-center text-[10px] leading-none font-bold"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: borderColors.outset,
                  borderRadius: 0,
                }}
                aria-hidden="true"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
        {/* Content area */}
        <div
          className="p-4 bg-white m-1"
          style={{
            boxShadow: shadows.inset,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: borderColors.inset,
            borderRadius: 0,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  if (variant === "inset") {
    return (
      <div
        className={cn("p-4 bg-white", className)}
        style={{
          boxShadow: shadows.insetDeep,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: borderColors.inset,
          borderRadius: 0,
        }}
      >
        {title && (
          <div className="text-xs font-bold text-[#404040] mb-3 font-[var(--font-body)] uppercase tracking-wider">
            {title}
          </div>
        )}
        {children}
      </div>
    );
  }

  // default variant
  return (
    <div
      className={cn("p-6 bg-[#C0C0C0]", className)}
      style={{
        boxShadow: shadows.outsetDeep,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.outset,
        borderRadius: 0,
      }}
    >
      {title && (
        <div className="text-xs font-bold text-[#404040] mb-3 font-[var(--font-body)] uppercase tracking-wider">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
