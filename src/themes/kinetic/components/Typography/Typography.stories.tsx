import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/Typography",
  component: Typography,
  decorators: [kineticDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "body",
        "body-sm",
        "label",
        "caption",
      ],
    },
    muted: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "KINETIC" },
};

export const H1: Story = {
  args: { variant: "h1", children: "HEADING ONE" },
};

export const H2: Story = {
  args: { variant: "h2", children: "HEADING TWO" },
};

export const H3: Story = {
  args: { variant: "h3", children: "HEADING THREE" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Typography is not decoration—it is the entire visual structure. Text becomes image, headline becomes hero, motion becomes rhythm.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "SECTION LABEL" },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <Typography variant="display">DISPLAY</Typography>
      <Typography variant="h1">HEADING ONE</Typography>
      <Typography variant="h2">HEADING TWO</Typography>
      <Typography variant="h3">HEADING THREE</Typography>
      <Typography variant="body">
        Body text — larger than standard web for maximum readability against dark
        backgrounds. Typography drives the entire visual hierarchy.
      </Typography>
      <Typography variant="body-sm">
        Small body text — secondary descriptions and supporting content.
      </Typography>
      <Typography variant="label">LABEL TEXT</Typography>
      <Typography variant="caption" muted>
        Caption — muted metadata and timestamps
      </Typography>
    </div>
  ),
};
