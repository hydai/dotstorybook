interface ScanlineOverlayProps {
  opacity?: number;
  tint?: "magenta" | "neutral";
}

export function ScanlineOverlay({
  opacity = 1,
  tint = "magenta",
}: ScanlineOverlayProps) {
  return (
    <div
      className={
        tint === "magenta"
          ? "vapor-scanline-overlay"
          : "vapor-scanline-overlay-neutral"
      }
      style={{ opacity }}
    />
  );
}
