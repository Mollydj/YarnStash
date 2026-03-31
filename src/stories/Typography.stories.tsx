import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "antd";

const { Text } = Typography;

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Placeholder: Story = {
  args: {
    children: "Placeholder text",
  },
};