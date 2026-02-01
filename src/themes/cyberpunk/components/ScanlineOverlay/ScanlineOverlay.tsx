interface ScanlineOverlayProps {
  opacity?: number;
  tint?: "green" | "neutral";
}

export function ScanlineOverlay({
  opacity = 1,
  tint = "green",
}: ScanlineOverlayProps) {
  return (
    <div
      className={
        tint === "green"
          ? "cyber-scanline-overlay"
          : "cyber-scanline-overlay-neutral"
      }
      style={{ opacity }}
    />
  );
}
