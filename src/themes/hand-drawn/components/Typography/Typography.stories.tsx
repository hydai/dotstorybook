import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/Typography",
  component: Typography,
  decorators: [handDrawnDecorator],
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
  args: { variant: "display", children: "Sketch" },
};

export const Heading1: Story = {
  args: { variant: "h1", children: "Quick sketch" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Note to self" },
};

export const Heading3: Story = {
  args: { variant: "h3", children: "Draft ideas" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Sometimes the best ideas come from messy doodles in the margins of a notebook. Don't be afraid to sketch rough and iterate later.",
  },
};

export const BodySmall: Story = {
  args: {
    variant: "body-sm",
    children: "A smaller note scribbled in the corner of the page.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "Work in progress" },
};

export const Caption: Story = {
  args: { variant: "caption", children: "Sketch #42 · Last edited today" },
};

export const Muted: Story = {
  args: {
    variant: "body",
    children: "This text is a bit faded, like pencil marks that have been partially erased.",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <Typography variant="display">Sketch</Typography>
      <Typography variant="h1">Quick sketch</Typography>
      <Typography variant="h2">Note to self</Typography>
      <Typography variant="h3">Draft ideas</Typography>
      <Typography variant="body">
        Sometimes the best ideas come from messy doodles in the margins of a
        notebook. Don't be afraid to sketch rough and iterate later.
      </Typography>
      <Typography variant="body-sm">
        A smaller note scribbled in the corner of the page.
      </Typography>
      <Typography variant="label">Work in progress</Typography>
      <Typography variant="caption">
        Sketch #42 · Last edited today
      </Typography>
      <Typography variant="body" muted>
        Faded pencil marks, partially erased.
      </Typography>
    </div>
  ),
};
