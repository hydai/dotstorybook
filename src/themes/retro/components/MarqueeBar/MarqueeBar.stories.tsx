import type { Meta, StoryObj } from "@storybook/react";
import { MarqueeBar } from "./MarqueeBar";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/MarqueeBar",
  component: MarqueeBar,
  decorators: [retroDecorator],
  argTypes: {
    speed: { control: { type: "range", min: 10, max: 200 } },
  },
} satisfies Meta<typeof MarqueeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <span style={{ color: "#FF0000" }}>*** WELCOME ***</span>
        {" | "}
        <span style={{ color: "#0000FF" }}>This page is UNDER CONSTRUCTION</span>
        {" | "}
        <span style={{ color: "#FF00FF" }}>Best viewed in Netscape Navigator 3.0</span>
        {" | "}
        <span style={{ color: "#008000" }}>Sign my guestbook!</span>
        {" | "}
        <span style={{ color: "#FF8800" }}>Last updated: 01/15/1997</span>
        {" | "}
      </>
    ),
  },
};

export const SlowSpeed: Story = {
  args: {
    speed: 30,
    children: (
      <>
        <span style={{ color: "#FF0000" }}>BREAKING NEWS: </span>
        <span>You are visitor number 001337! Congratulations!</span>
        {" | "}
      </>
    ),
  },
};
