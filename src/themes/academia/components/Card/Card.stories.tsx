import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/Card",
  component: Card,
  decorators: [academiaDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "ornate"],
    },
    hoverable: { control: "boolean" },
    title: { control: "text" },
    volume: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-2">
    <p className="text-sm text-[var(--color-text-primary)]">
      A treatise on the foundations of natural philosophy, examining the
      principles that govern motion and light.
    </p>
    <p className="text-xs text-[var(--color-text-muted)]">
      University Press &middot; Anno Domini 1867
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", title: "VOLUME I", children: cardContent },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    title: "THE MANUSCRIPT",
    children: cardContent,
  },
};

export const Ornate: Story = {
  args: {
    variant: "ornate",
    title: "THESIS DEFENSE",
    children: cardContent,
  },
};

export const WithVolume: Story = {
  args: {
    variant: "ornate",
    title: "PRINCIPIA",
    volume: "IV",
    children: cardContent,
  },
};

export const Hoverable: Story = {
  args: {
    variant: "default",
    hoverable: true,
    title: "HOVER ME",
    children: cardContent,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Card variant="default" title="DEFAULT" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Standard card with wood grain border.
        </p>
      </Card>
      <Card variant="bordered" title="BORDERED" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Gilt-framed card with brass border.
        </p>
      </Card>
      <Card variant="ornate" title="ORNATE" volume="III" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Ornamental card with corner flourishes and volume watermark.
        </p>
      </Card>
    </div>
  ),
};
