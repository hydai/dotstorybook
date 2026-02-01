import React from "react";
import { cn } from "@/shared/utils/cn";
import { colors } from "../../tokens";

interface OrganicDividerProps {
  variant?: "wave" | "leaf" | "vine";
  color?: string;
  className?: string;
}

function WavePath({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20 C50 8, 100 32, 150 20 S250 8, 300 20 S400 32, 450 20 S550 8, 600 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function LeafPath({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20 L280 20 M320 20 L600 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M290 10 C300 20, 300 20, 310 10 M290 30 C300 20, 300 20, 310 30"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function VinePath({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20 C30 12, 60 28, 90 20 C120 12, 150 28, 180 20 C210 12, 240 28, 270 20 C300 12, 330 28, 360 20 C390 12, 420 28, 450 20 C480 12, 510 28, 540 20 C570 12, 590 20, 600 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="90" cy="16" r="2" fill={color} opacity="0.5" />
      <circle cx="270" cy="24" r="2.5" fill={color} opacity="0.4" />
      <circle cx="450" cy="16" r="2" fill={color} opacity="0.5" />
    </svg>
  );
}

const variants: Record<
  NonNullable<OrganicDividerProps["variant"]>,
  React.FC<{ color: string }>
> = {
  wave: WavePath,
  leaf: LeafPath,
  vine: VinePath,
};

export function OrganicDivider({
  variant = "wave",
  color = colors.accent.DEFAULT,
  className,
}: OrganicDividerProps) {
  const SvgComponent = variants[variant];

  return (
    <div className={cn("w-full py-4", className)} role="separator">
      <SvgComponent color={color} />
    </div>
  );
}
