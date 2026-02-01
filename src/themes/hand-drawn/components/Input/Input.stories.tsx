import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/Input",
  component: Input,
  decorators: [handDrawnDecorator],
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Jot something down..." },
};

export const WithLabel: Story = {
  args: { label: "Your idea", placeholder: "Write here..." },
};

export const WithError: Story = {
  args: {
    label: "Title",
    placeholder: "Name your sketch",
    error: "Oops! This can't be blank",
  },
};

export const Disabled: Story = {
  args: {
    label: "Read only",
    placeholder: "Can't write here",
    disabled: true,
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input placeholder="Jot something down..." />
      <Input label="Your idea" placeholder="Write here..." />
      <Input
        label="Title"
        placeholder="Name your sketch"
        error="Oops! This can't be blank"
      />
      <Input label="Read only" placeholder="Can't write here" disabled />
    </div>
  ),
};
