import type { Meta, StoryObj } from "@storybook/react";
import YarnLoader from "../Components/Loader/Loader";


const meta: Meta<typeof YarnLoader> = {
  title: "Components/Feedback/YarnLoader",
  component: YarnLoader,
};

export default meta;

type Story = StoryObj<typeof YarnLoader>;

export const Default: Story = {};