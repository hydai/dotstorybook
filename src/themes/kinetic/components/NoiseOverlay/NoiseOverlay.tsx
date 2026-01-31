export function NoiseOverlay() {
  return (
    <svg className="kinetic-noise" aria-hidden="true">
      <title>Noise texture overlay</title>
      <filter id="kinetic-noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#kinetic-noise-filter)"
      />
    </svg>
  );
}
