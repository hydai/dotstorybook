import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Typography",
  component: Typography,
  decorators: [retroDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "body",
        "body-lg",
        "label",
        "mono",
      ],
    },
    rainbow: { control: "boolean" },
    shadow3d: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "WELCOME TO MY HOME PAGE" },
};

export const H1: Story = {
  args: { variant: "h1", children: "COOL LINKS" },
};

export const H2: Story = {
  args: { variant: "h2", children: "ABOUT ME" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Welcome to my totally awesome web page! Please sign my guestbook and don't forget to add me to your bookmarks!",
  },
};

export const Rainbow: Story = {
  args: {
    variant: "h1",
    rainbow: true,
    children: "RAINBOW TEXT!!!",
  },
};

export const Shadow3D: Story = {
  args: {
    variant: "h1",
    shadow3d: true,
    children: "3D SHADOW TEXT",
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="display">DISPLAY TEXT</Typography>
      <Typography variant="h1">HEADING ONE</Typography>
      <Typography variant="h2">HEADING TWO</Typography>
      <Typography variant="h3">HEADING THREE</Typography>
      <Typography variant="body">
        Body text for reading content on the page.
      </Typography>
      <Typography variant="body-lg">
        Larger body text for emphasis.
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="mono">monospace code text</Typography>
      <Typography variant="h2" rainbow>
        RAINBOW ANIMATED
      </Typography>
      <Typography variant="h2" shadow3d>
        3D SHADOW EFFECT
      </Typography>
    </div>
  ),
};
