export function NoiseOverlay() {
  return (
    <svg className="bold-typo-noise" aria-hidden="true">
      <title>Noise texture overlay</title>
      <filter id="bold-typo-noise-filter">
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
        filter="url(#bold-typo-noise-filter)"
      />
    </svg>
  );
}
