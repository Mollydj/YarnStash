import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "antd";
import Heading from "../Components/Headings/Headings";

const { Title } = Typography;

const meta: Meta<typeof Title> = {
  title: "Typography/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Placeholder: Story = {
  args: {
    children: "Placeholder text",
  },
  render: (args) => (
  <>
    <Heading>{args.children}</Heading>
    <Heading level={2}>{args.children}</Heading>
    <Heading level={3}>{args.children}</Heading>
    <Heading level={4}>{args.children}</Heading>
    <Heading level={5}>{args.children}</Heading >
  </>
  ),
};