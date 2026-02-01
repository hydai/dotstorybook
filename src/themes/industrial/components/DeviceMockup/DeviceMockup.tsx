import { cn } from "@/shared/utils/cn";
import { shadows } from "../../tokens";

interface DeviceMockupProps {
  className?: string;
  screenText?: string;
}

function CornerScrew({ position }: { position: string }) {
  return (
    <span
      className={cn("absolute w-2.5 h-2.5 rounded-full", position)}
      style={{
        background:
          "radial-gradient(circle at 35% 35%, #f0f2f5 0%, #c8cfd8 50%, #a3b1c6 100%)",
        boxShadow:
          "inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(163, 177, 198, 0.4)",
      }}
    />
  );
}

function LEDDot({
  color,
  glow,
  delay = "0s",
}: {
  color: string;
  glow: string;
  delay?: string;
}) {
  return (
    <div
      className="h-1.5 w-1.5 rounded-full"
      style={{
        backgroundColor: color,
        boxShadow: glow,
        animation: `industrial-led-pulse 2s ease-in-out ${delay} infinite`,
      }}
    />
  );
}

function MiniButton() {
  return (
    <div
      className="h-5 w-5 rounded-[3px] bg-[var(--color-surface-0)] cursor-pointer active:translate-y-px"
      style={{
        boxShadow: "3px 3px 6px #babecc, -3px -3px 6px #ffffff",
      }}
    />
  );
}

function Knob() {
  return (
    <div
      className="relative h-10 w-10 rounded-full bg-[var(--color-surface-0)]"
      style={{
        boxShadow:
          "4px 4px 8px #babecc, -4px -4px 8px #ffffff, inset 1px 1px 2px rgba(255, 255, 255, 0.4)",
      }}
    >
      {/* Tick mark */}
      <div
        className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 rounded-full bg-[var(--color-text-muted)]"
      />
    </div>
  );
}

export function DeviceMockup({
  className,
  screenText = "> SYSTEM ONLINE\n> ALL MODULES NOMINAL\n> UPTIME: 99.97%",
}: DeviceMockupProps) {
  return (
    <div
      className={cn(
        "relative inline-block p-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-0)]",
        className
      )}
      style={{ boxShadow: shadows.floating }}
    >
      {/* Corner screws */}
      <CornerScrew position="top-2.5 left-2.5" />
      <CornerScrew position="top-2.5 right-2.5" />
      <CornerScrew position="bottom-2.5 left-2.5" />
      <CornerScrew position="bottom-2.5 right-2.5" />

      {/* Screen (recessed) */}
      <div
        className="relative w-64 h-36 rounded-[var(--radius-md)] bg-[#1a1a2e] overflow-hidden mb-4"
        style={{
          boxShadow: shadows.recessed,
        }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            animation: "industrial-scanline 8s linear infinite",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(46, 213, 115, 0.15) 50%, transparent 100%)",
            height: "200%",
          }}
        />

        {/* Screen text */}
        <pre className="relative z-10 p-3 text-[10px] leading-relaxed font-[var(--font-mono)] text-[#2ed573] whitespace-pre-wrap">
          {screenText}
        </pre>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between">
        {/* LED cluster */}
        <div className="flex gap-2 items-center">
          <LEDDot
            color="#ff4757"
            glow={shadows.ledGlow.red}
          />
          <LEDDot
            color="#2ed573"
            glow={shadows.ledGlow.green}
            delay="0.3s"
          />
          <LEDDot
            color="#ffa502"
            glow={shadows.ledGlow.amber}
            delay="0.6s"
          />
        </div>

        {/* Mini buttons */}
        <div className="flex gap-2">
          <MiniButton />
          <MiniButton />
          <MiniButton />
          <MiniButton />
        </div>

        {/* Knob */}
        <Knob />
      </div>

      {/* Vent slots */}
      <div className="flex gap-1.5 justify-center mt-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-1 rounded-full"
            style={{
              boxShadow:
                "inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff",
              backgroundColor: "#d1d9e6",
            }}
          />
        ))}
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <span className="text-[9px] font-[var(--font-mono)] text-[var(--color-text-muted)] uppercase tracking-[0.2em]">
          IND-7742 // Rev.C
        </span>
      </div>
    </div>
  );
}
