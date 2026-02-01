import type { Meta, StoryObj } from "@storybook/react";
import { ArchImage } from "./ArchImage";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/ArchImage",
  component: ArchImage,
  decorators: [botanicalDecorator],
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["3/4", "4/3", "1/1", "16/9"],
    },
  },
} satisfies Meta<typeof ArchImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderSrc =
  "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=500&fit=crop";

export const Default: Story = {
  args: {
    src: placeholderSrc,
    alt: "A lush botanical garden path",
    aspectRatio: "3/4",
  },
};

export const Square: Story = {
  args: {
    src: placeholderSrc,
    alt: "A lush botanical garden path",
    aspectRatio: "1/1",
  },
};

export const Landscape: Story = {
  args: {
    src: placeholderSrc,
    alt: "A lush botanical garden path",
    aspectRatio: "4/3",
  },
};

export const AllAspectRatios: Story = {
  args: { src: placeholderSrc, alt: "Garden" },
  render: () => (
    <div className="flex gap-6 items-end">
      <div className="w-40">
        <ArchImage
          src={placeholderSrc}
          alt="Portrait"
          aspectRatio="3/4"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          3:4
        </p>
      </div>
      <div className="w-40">
        <ArchImage
          src={placeholderSrc}
          alt="Square"
          aspectRatio="1/1"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          1:1
        </p>
      </div>
      <div className="w-48">
        <ArchImage
          src={placeholderSrc}
          alt="Landscape"
          aspectRatio="4/3"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          4:3
        </p>
      </div>
    </div>
  ),
};
