import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/Typography",
  component: Typography,
  decorators: [terminalDecorator],
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
  args: { variant: "display", children: "DISPLAY" },
};

export const H1: Story = {
  args: { variant: "h1", children: "HEADING 1" },
};

export const H2: Story = {
  args: { variant: "h2", children: "HEADING 2" },
};

export const H3: Story = {
  args: { variant: "h3", children: "HEADING 3" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Body text for regular terminal output. All monospaced, all the time. No serifs allowed in this facility.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "SYSTEM STATUS" },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-6 max-w-xl">
      <Typography variant="display">DISPLAY</Typography>
      <Typography variant="h1">HEADING 1</Typography>
      <Typography variant="h2">HEADING 2</Typography>
      <Typography variant="h3">HEADING 3</Typography>
      <Typography variant="body">
        Body text — standard terminal output for paragraphs and logs.
      </Typography>
      <Typography variant="body-sm">
        Small body text — secondary output and metadata.
      </Typography>
      <Typography variant="label">LABEL TEXT</Typography>
      <Typography variant="caption" muted>
        caption — muted system info
      </Typography>
    </div>
  ),
};
