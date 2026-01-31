import type { Meta, StoryObj } from "@storybook/react";
import { DecoCard } from "./DecoCard";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/DecoCard",
  component: DecoCard,
  decorators: [artDecoDecorator],
  argTypes: {
    tier: {
      control: "select",
      options: ["I", "II", "III"],
    },
    showCorners: { control: "boolean" },
    hoverable: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof DecoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "THE CHRYSLER",
    tier: "I",
    children: (
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-primary)]">
          A masterpiece of Art Deco architecture, rising boldly above the
          Manhattan skyline.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          New York &middot; 1930
        </p>
      </div>
    ),
  },
};

export const TierTwo: Story = {
  args: {
    title: "THE EMPIRE",
    tier: "II",
    children: (
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-primary)]">
          An icon of ambition and elegance, reaching toward the heavens.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          New York &middot; 1931
        </p>
      </div>
    ),
  },
};

export const TierThree: Story = {
  args: {
    title: "THE WALDORF",
    tier: "III",
    children: (
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-primary)]">
          Where luxury meets legacy in an unforgettable experience.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          New York &middot; 1931
        </p>
      </div>
    ),
  },
};

export const NoCorners: Story = {
  args: {
    title: "MINIMAL",
    showCorners: false,
    children: (
      <p className="text-sm text-[var(--color-text-primary)]">
        A clean variant without decorative corners.
      </p>
    ),
  },
};

export const AllTiers: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-6 max-w-md">
      <DecoCard title="THE CHRYSLER" tier="I">
        <p className="text-sm text-[var(--color-text-primary)]">
          First tier — the pinnacle of Art Deco luxury.
        </p>
      </DecoCard>
      <DecoCard title="THE EMPIRE" tier="II">
        <p className="text-sm text-[var(--color-text-primary)]">
          Second tier — refined elegance and distinction.
        </p>
      </DecoCard>
      <DecoCard title="THE WALDORF" tier="III">
        <p className="text-sm text-[var(--color-text-primary)]">
          Third tier — classic sophistication.
        </p>
      </DecoCard>
    </div>
  ),
};
