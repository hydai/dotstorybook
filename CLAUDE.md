# Vibe Storybook

A themed React component library showcasing 21 design systems in Storybook.

## Tech Stack

- React 19 + TypeScript 5
- Tailwind CSS 4
- Storybook 8
- Vite
- Motion (Framer Motion)
- pnpm

## Commands

```bash
pnpm install          # Install dependencies
pnpm storybook        # Start Storybook on port 6006
pnpm dev              # Start Vite dev server
pnpm build            # Build (tsc + vite build)
pnpm build-storybook  # Build static Storybook
```

## Project Structure

Each theme lives under `src/themes/<theme-name>/` with:
- `components/` - React components + `*.stories.tsx` files
- `styles/` - CSS files (theme variables, animations, textures)
- `tokens/` - Design tokens (colors, animations, shadows)
- `index.ts` - Public exports
- `storyDecorator.tsx` - Storybook decorator wrapping stories with ThemeProvider

Global CSS imports for all themes are in `src/index.css`.

## Conventions

- Each theme is self-contained under its own directory
- Components use `clsx` and `tailwind-merge` for className composition
- Every component has a co-located `*.stories.tsx` file
- Theme-specific CSS custom properties are defined in `styles/theme.css`
- Design tokens are TypeScript objects in `tokens/`
- Storybook stories are organized by theme name (e.g., `Vaporwave/Button`)
- New themes must add their CSS imports to `src/index.css`

## Adding a New Theme

1. Create `src/themes/<theme-name>/` with the standard directory structure
2. Add CSS imports to `src/index.css`
3. Include at minimum: Button, Card, Badge, Input, Typography components
4. Add Foundation stories (Colors, Animations, Effects) for the design system
5. Create a `storyDecorator.tsx` with the theme's `ThemeProvider`
