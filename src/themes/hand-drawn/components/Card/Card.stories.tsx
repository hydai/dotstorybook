import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/Card",
  component: Card,
  decorators: [handDrawnDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "postit", "speech-bubble"],
    },
    decoration: {
      control: "select",
      options: ["none", "tape", "tack"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-2">
    <h3
      className="text-lg font-bold text-[var(--color-text-primary)]"
      style={{ fontFamily: "'Kalam', cursive" }}
    >
      Quick sketch
    </h3>
    <p
      className="text-base text-[var(--color-text-secondary)]"
      style={{ fontFamily: "'Patrick Hand', cursive" }}
    >
      A rough idea jotted down on paper. Sometimes the best ideas start as
      messy doodles in the margins of a notebook.
    </p>
    <p
      className="text-sm text-[var(--color-text-muted)]"
      style={{ fontFamily: "'Patrick Hand', cursive" }}
    >
      Sketch #42 · Draft
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", children: cardContent },
};

export const PostIt: Story = {
  args: { variant: "postit", children: cardContent },
};

export const SpeechBubble: Story = {
  args: { variant: "speech-bubble", children: cardContent },
};

export const WithTape: Story = {
  args: {
    variant: "default",
    decoration: "tape",
    children: cardContent,
  },
};

export const WithTack: Story = {
  args: {
    variant: "default",
    decoration: "tack",
    children: cardContent,
  },
};

export const Hoverable: Story = {
  args: {
    variant: "default",
    hoverable: true,
    children: cardContent,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-8 max-w-md">
      <Card variant="default" hoverable>
        <h3
          className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Default Card
        </h3>
        <p
          className="text-base text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          White paper with wobbly borders and a hard shadow.
        </p>
      </Card>
      <Card variant="postit" hoverable>
        <h3
          className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Post-it Note
        </h3>
        <p
          className="text-base text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Sticky yellow note, slightly tilted like it was stuck in a hurry.
        </p>
      </Card>
      <Card variant="speech-bubble" hoverable>
        <h3
          className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Speech Bubble
        </h3>
        <p
          className="text-base text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Like a comic book thought bubble with a triangle tail.
        </p>
      </Card>
      <Card variant="default" decoration="tape" hoverable>
        <h3
          className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Taped Card
        </h3>
        <p
          className="text-base text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Stuck to the wall with a strip of translucent tape.
        </p>
      </Card>
      <Card variant="default" decoration="tack" hoverable>
        <h3
          className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Tacked Card
        </h3>
        <p
          className="text-base text-[var(--color-text-secondary)]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          Pinned to a corkboard with a red thumbtack.
        </p>
      </Card>
    </div>
  ),
};
