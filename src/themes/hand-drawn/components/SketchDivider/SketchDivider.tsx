import { cn } from "@/shared/utils/cn";

interface SketchDividerProps {
  variant?: "squiggly" | "dashed" | "zigzag";
  color?: "pencil" | "red" | "blue";
  className?: string;
}

const colorMap: Record<NonNullable<SketchDividerProps["color"]>, string> = {
  pencil: "#2d2d2d",
  red: "#ff4d4d",
  blue: "#2d5da1",
};

function SquigglyPath({ stroke }: { stroke: string }) {
  return (
    <svg
      width="100%"
      height="12"
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6 C 20 2, 30 10, 50 6 C 70 2, 80 10, 100 6 C 120 2, 130 10, 150 6 C 170 2, 180 10, 200 6 C 220 2, 230 10, 250 6 C 270 2, 280 10, 300 6 C 320 2, 330 10, 350 6 C 370 2, 380 10, 400 6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DashedPath({ stroke }: { stroke: string }) {
  return (
    <svg
      width="100%"
      height="12"
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6 C 5 5, 10 7, 50 6 C 55 5, 60 7, 100 6 C 105 5, 110 7, 150 6 C 155 5, 160 7, 200 6 C 205 5, 210 7, 250 6 C 255 5, 260 7, 300 6 C 305 5, 310 7, 350 6 C 355 5, 360 7, 400 6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="12 8"
      />
    </svg>
  );
}

function ZigzagPath({ stroke }: { stroke: string }) {
  return (
    <svg
      width="100%"
      height="16"
      viewBox="0 0 400 16"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8 L 15 3 L 30 12 L 45 3 L 60 12 L 75 3 L 90 12 L 105 3 L 120 12 L 135 3 L 150 12 L 165 3 L 180 12 L 195 3 L 210 12 L 225 3 L 240 12 L 255 3 L 270 12 L 285 3 L 300 12 L 315 3 L 330 12 L 345 3 L 360 12 L 375 3 L 390 12 L 400 8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchDivider({
  variant = "squiggly",
  color = "pencil",
  className,
}: SketchDividerProps) {
  const stroke = colorMap[color];

  return (
    <div className={cn("w-full py-2", className)} role="separator">
      {variant === "squiggly" && <SquigglyPath stroke={stroke} />}
      {variant === "dashed" && <DashedPath stroke={stroke} />}
      {variant === "zigzag" && <ZigzagPath stroke={stroke} />}
    </div>
  );
}
