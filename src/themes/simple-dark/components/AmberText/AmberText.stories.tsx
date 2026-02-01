import type { Meta, StoryObj } from "@storybook/react";
import { AmberText } from "./AmberText";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/AmberText",
  component: AmberText,
  decorators: [simpleDarkDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["gradient", "glow", "solid"],
    },
    as: {
      control: "select",
      options: ["span", "h1", "h2", "h3", "p"],
    },
  },
} satisfies Meta<typeof AmberText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    children: "Amber Gradient",
    variant: "gradient",
    as: "h1",
    className: "text-5xl font-bold font-[var(--font-heading)] tracking-tight",
  },
};

export const Glow: Story = {
  args: {
    children: "Amber Glow",
    variant: "glow",
    as: "h1",
    className: "text-5xl font-bold font-[var(--font-heading)] tracking-tight",
  },
};

export const Solid: Story = {
  args: {
    children: "Amber Solid",
    variant: "solid",
    as: "h2",
    className: "text-3xl font-bold font-[var(--font-heading)]",
  },
};

export const InlineUsage: Story = {
  render: () => (
    <p className="text-lg text-[var(--color-text-primary)] font-[var(--font-sans)]">
      Build something{" "}
      <AmberText variant="gradient" className="font-bold">
        extraordinary
      </AmberText>{" "}
      with the Simple Dark theme.
    </p>
  ),
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <AmberText
        variant="gradient"
        as="h1"
        className="text-5xl font-bold font-[var(--font-heading)] tracking-tight"
      >
        Gradient Text
      </AmberText>
      <AmberText
        variant="glow"
        as="h1"
        className="text-5xl font-bold font-[var(--font-heading)] tracking-tight"
      >
        Glow Text
      </AmberText>
      <AmberText
        variant="solid"
        as="h2"
        className="text-3xl font-semibold font-[var(--font-heading)]"
      >
        Solid Text
      </AmberText>
    </div>
  ),
};
