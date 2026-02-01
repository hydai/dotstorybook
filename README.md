# Vibe Storybook

A collection of 21 uniquely themed React component libraries, each showcasing a distinct visual design system. Built with React, TypeScript, Tailwind CSS, and Storybook.

## Themes

| # | Theme | Description |
|---|-------|-------------|
| 1 | **Linear / Modern** | Clean, minimal design system with subtle grid backgrounds |
| 2 | **Terminal** | Monospaced hacker aesthetic with scanline overlays |
| 3 | **Kinetic** | Motion-heavy design with dynamic animations |
| 4 | **Art Deco** | 1920s-inspired geometric patterns with crosshatch textures |
| 5 | **Bold Typography** | Large-scale type-driven design with noise textures |
| 6 | **Cyberpunk / Glitch** | Neon-lit futuristic UI with circuit board patterns |
| 7 | **Vaporwave / Outrun** | Retro-futuristic 80s aesthetic with gradient suns and perspective grids |
| 8 | **Crypto (Bitcoin DeFi)** | Blockchain-inspired dark theme with grid backgrounds |
| 9 | **Simple Dark** | Minimal dark mode with noise textures |
| 10 | **Playful Geometric** | Memphis-inspired colorful shapes with confetti and dot grids |
| 11 | **Clay (Claymorphism)** | Soft, rounded 3D clay-like components |
| 12 | **Academia** | Classical university aesthetic with parchment textures |
| 13 | **Business Style** | Serif editorial design with paper textures and rule dividers |
| 14 | **Botanical / Organic Serif** | Nature-inspired organic forms with leaf textures |
| 15 | **Corporate Trust** | Enterprise SaaS professional clean design |
| 16 | **Hand-Drawn / Sketch** | Pencil-sketch aesthetic with paper dot backgrounds |
| 17 | **Industrial** | Skeuomorphic industrial design with noise textures |
| 18 | **Neumorphism** | Soft UI with subtle shadows and pressed/raised effects |
| 19 | **Organic / Natural** | Earthy tones with grain overlays and organic blob shapes |
| 20 | **Maximalism** | Dopamine-driven bold colors with gradient patterns |
| 21 | **Retro / 90s Nostalgia** | 90s-inspired design with retro tile backgrounds |

Each theme includes a full set of components: Button, Card, Badge, Input, Typography, and theme-specific decorative elements.

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Storybook](https://storybook.js.org/) 8
- [Vite](https://vite.dev/)
- [Motion](https://motion.dev/) (Framer Motion)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Start Vite dev server
pnpm dev

# Build
pnpm build
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

## Project Structure

```
src/
  themes/
    <theme-name>/
      components/       # React components with Storybook stories
      styles/           # CSS (theme variables, animations, textures)
      tokens/           # Design tokens (colors, animations, shadows)
      index.ts          # Theme exports
      storyDecorator.tsx # Storybook decorator for the theme
  index.css             # Global CSS importing all theme styles
```

## Credits

- Theme design prompts provided by [designprompts.dev](https://www.designprompts.dev/)

## License

MIT
