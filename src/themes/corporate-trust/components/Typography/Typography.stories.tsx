import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/Typography",
  component: Typography,
  decorators: [corporateTrustDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-sm", "label"],
    },
    muted: { control: "boolean" },
    gradient: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: "display",
    children: "Build Trust at Scale",
  },
};

export const GradientDisplay: Story = {
  args: {
    variant: "display",
    children: "Build Trust at Scale",
    gradient: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Typography variant="display">Display — Build Trust</Typography>
      <Typography variant="display" gradient>
        Display Gradient — Build Trust
      </Typography>
      <Typography variant="h1">H1 — Enterprise Solutions</Typography>
      <Typography variant="h1" gradient>
        H1 Gradient — Enterprise Solutions
      </Typography>
      <Typography variant="h2">H2 — Secure Infrastructure</Typography>
      <Typography variant="h3">H3 — Compliance Ready</Typography>
      <Typography variant="body">
        Body — We provide enterprise-grade security and compliance solutions
        that scale with your business needs.
      </Typography>
      <Typography variant="body-sm" muted>
        Body Small Muted — Last updated 2 hours ago
      </Typography>
      <Typography variant="label">Label — Status</Typography>
    </div>
  ),
};
