import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "antd";
import Button from "../Components/Button/Button.tsx";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    type: "default",
    variant: "solid",
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["default", "primary", "dashed", "text", "link"],
    },
    variant: {
      control: "select",
      options: ["solid", "filled", "outlined", "dashed", "text", "link"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Buttons = (args: React.ComponentProps<typeof Button>) => (
  <Flex gap="large">
    <Flex gap="middle" wrap>
      <Button {...args} type="default">
        Default
      </Button>
      <Button {...args} type="primary">
        Primary
      </Button>
      <Button {...args} type="dashed">
        Dashed
      </Button>
      <Button {...args} type="text">
        Text
      </Button>
      <Button {...args} type="link">
        Link
      </Button>
    </Flex>
  </Flex>
);
export const Variants: Story = {
  args: {
    color: "default",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "danger",
        "pink",
        "purple",
        "cyan",
      ],
    },
  },
  render: (args) => (
    <Flex gap="large" wrap>
          <Button color="default" variant="solid">
            Solid
          </Button>
          <Button color="default" variant="outlined">
            Outlined
          </Button>
          <Button color="default" variant="dashed">
            Dashed
          </Button>
          <Button color="default" variant="filled">
            Filled
          </Button>
          <Button color="default" variant="text">
            Text
          </Button>
          <Button color="default" variant="link">
            Link
          </Button>
    </Flex>
  ),
};
export const Playground: Story = {};

export const ButtonTypes: Story = {
  render: Buttons,
};

