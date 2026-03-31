import type { Meta, StoryObj } from "@storybook/react";
import StashMasonry from "../Components/Masonry/Masonry";

const meta: Meta<typeof StashMasonry> = {
  title: "Components/Masonry",
  component: StashMasonry,
};

export default meta;

type Story = StoryObj<typeof StashMasonry>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <StashMasonry />
    </div>
  ),
};
