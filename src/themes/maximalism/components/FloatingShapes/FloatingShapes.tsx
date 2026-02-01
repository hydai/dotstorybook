import React from "react";
import { cn } from "@/shared/utils/cn";

interface FloatingShapesProps {
  children?: React.ReactNode;
  density?: "sparse" | "medium" | "dense";
  className?: string;
  seed?: number;
}

const ACCENT_COLORS = ["#FF3AF2", "#00F5D4", "#FFE600", "#FF6B35", "#7B2FFF"];
const ANIMATIONS = ["max-float", "max-float-reverse", "max-spin-slow"];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type ShapeType = "star" | "circle" | "diamond";

function renderShape(type: ShapeType, color: string, size: number) {
  switch (type) {
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
        </svg>
      );
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L22 12L12 22L2 12z" />
        </svg>
      );
  }
}

const densityMap = { sparse: 8, medium: 16, dense: 28 };
const shapeTypes: ShapeType[] = ["star", "circle", "diamond"];

export function FloatingShapes({
  children,
  density = "medium",
  className,
  seed = 42,
}: FloatingShapesProps) {
  const count = densityMap[density];
  const rand = seededRandom(seed);

  const shapes = Array.from({ length: count }, (_, i) => {
    const color = ACCENT_COLORS[i % 5]!;
    const type = shapeTypes[Math.floor(rand() * 3)]!;
    const size = 12 + Math.floor(rand() * 24);
    const left = rand() * 100;
    const top = rand() * 100;
    const opacity = 0.15 + rand() * 0.25;
    const animClass = ANIMATIONS[i % 3];
    const delay = rand() * 4;

    return (
      <div
        key={i}
        aria-hidden="true"
        className={cn(animClass)}
        style={{
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          opacity,
          animationDelay: `${delay}s`,
          zIndex: 0,
        }}
      >
        {renderShape(type, color, size)}
      </div>
    );
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {shapes}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
