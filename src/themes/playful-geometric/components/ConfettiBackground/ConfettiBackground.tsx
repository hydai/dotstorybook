import React from "react";
import { cn } from "@/shared/utils/cn";

interface ConfettiBackgroundProps {
  children?: React.ReactNode;
  density?: "sparse" | "medium" | "dense";
  animated?: boolean;
  className?: string;
}

const COLORS = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const densityCount: Record<NonNullable<ConfettiBackgroundProps["density"]>, number> = {
  sparse: 12,
  medium: 24,
  dense: 40,
};

function Circle({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      opacity={0.6}
      style={{ animation: `pg-confetti-float 4s ease-in-out ${delay}s infinite alternate` }}
    />
  );
}

function Triangle({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: number }) {
  const h = size * 1.7;
  const points = `${x},${y - h / 2} ${x - size},${y + h / 2} ${x + size},${y + h / 2}`;
  return (
    <polygon
      points={points}
      fill={color}
      opacity={0.6}
      style={{ animation: `pg-confetti-float 5s ease-in-out ${delay}s infinite alternate` }}
    />
  );
}

function Square({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: number }) {
  return (
    <rect
      x={x - size}
      y={y - size}
      width={size * 2}
      height={size * 2}
      fill={color}
      opacity={0.6}
      rx={2}
      style={{ animation: `pg-confetti-float 4.5s ease-in-out ${delay}s infinite alternate` }}
    />
  );
}

export function ConfettiBackground({
  children,
  density = "medium",
  animated = true,
  className,
}: ConfettiBackgroundProps) {
  const count = densityCount[density];
  const rand = seededRandom(42);
  const shapes = Array.from({ length: count }, (_, i) => {
    const x = rand() * 100;
    const y = rand() * 100;
    const size = 4 + rand() * 8;
    const color = COLORS[i % COLORS.length]!;
    const delay = rand() * 3;
    const shapeType = i % 3;
    return { x, y, size, color, delay, shapeType, key: i };
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {shapes.map(({ x, y, size, color, delay, shapeType, key }) => {
          const animDelay = animated ? delay : 0;
          if (shapeType === 0) {
            return <Circle key={key} x={x} y={y} size={size / 10} color={color} delay={animDelay} />;
          }
          if (shapeType === 1) {
            return <Triangle key={key} x={x} y={y} size={size / 10} color={color} delay={animDelay} />;
          }
          return <Square key={key} x={x} y={y} size={size / 10} color={color} delay={animDelay} />;
        })}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
