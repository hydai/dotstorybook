import React from "react";
import { cn } from "@/shared/utils/cn";
import { shadows, borderColors, colors } from "../../tokens";

interface Win95WindowProps {
  children: React.ReactNode;
  title?: string;
  showButtons?: boolean;
  contentBg?: "white" | "yellow";
  className?: string;
}

export function Win95Window({
  children,
  title = "Untitled",
  showButtons = true,
  contentBg = "white",
  className,
}: Win95WindowProps) {
  const contentBgColor = contentBg === "yellow" ? "#FFFFCC" : "#FFFFFF";

  return (
    <div
      className={cn("bg-[#C0C0C0]", className)}
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.outsetDeep,
        borderRadius: 0,
        boxShadow: shadows.outsetDeep,
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-2 py-1"
        style={{
          background: `linear-gradient(90deg, ${colors.titleBar.start}, ${colors.titleBar.end})`,
        }}
      >
        <span className="text-white font-bold text-sm font-[var(--font-body)] truncate select-none">
          {title}
        </span>
        {showButtons && (
          <div className="flex gap-0.5 shrink-0">
            <button
              className="w-4 h-4 bg-[#C0C0C0] flex items-center justify-center text-[10px] leading-none font-bold"
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: borderColors.outset,
                borderRadius: 0,
              }}
              aria-label="Minimize"
            >
              _
            </button>
            <button
              className="w-4 h-4 bg-[#C0C0C0] flex items-center justify-center text-[10px] leading-none font-bold"
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: borderColors.outset,
                borderRadius: 0,
              }}
              aria-label="Maximize"
            >
              {"\u25A1"}
            </button>
            <button
              className="w-4 h-4 bg-[#C0C0C0] flex items-center justify-center text-[10px] leading-none font-bold"
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: borderColors.outset,
                borderRadius: 0,
              }}
              aria-label="Close"
            >
              {"\u00D7"}
            </button>
          </div>
        )}
      </div>
      {/* Menu Bar (optional visual) */}
      <div
        className="flex gap-4 px-2 py-0.5 text-xs font-[var(--font-body)] border-b"
        style={{ borderColor: "#808080" }}
      >
        <span className="underline">F</span>
        <span>ile</span>
        <span className="underline">E</span>
        <span>dit</span>
        <span className="underline">V</span>
        <span>iew</span>
        <span className="underline">H</span>
        <span>elp</span>
      </div>
      {/* Content Area */}
      <div
        className="m-1 p-4"
        style={{
          backgroundColor: contentBgColor,
          boxShadow: shadows.inset,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: borderColors.inset,
          borderRadius: 0,
        }}
      >
        {children}
      </div>
      {/* Status Bar */}
      <div
        className="px-2 py-0.5 text-xs font-[var(--font-body)]"
        style={{
          boxShadow: shadows.inset,
          borderTop: "1px solid #808080",
        }}
      >
        Ready
      </div>
    </div>
  );
}
