import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "antd";
import CardComponent from "../Components/Masonry/Card";

const meta: Meta<typeof CardComponent> = {
  title: "Components/Masonry/YarnCard",
  component: CardComponent,
  args: {
    url: "https://knittingforolive.com/cdn/shop/files/Merino_Gronspaette_b71a6b26-09de-40b0-8af2-72cdc01d0458_800x.jpg?v=1774003793",
    yarnName: "Merino",
    brandName: "Knitting For Olive",
    color: "Green Woodpecker",
    notes: "Merino wool has many excellent properties.  It is temperature-regulating.  That is, the wool keeps our bodies warm in cold weather, and releases heat in warm weather, keeping our skin cool.  At the same time, wool, like silk, can carry moisture away from the skin, and can absorb 30% of its weight without feeling wet.",
    isFavorite: true
  },
  argTypes: {
    isFavorite: {
      control: "boolean",
    },
    url: {
      control: "text",
    },
    yarnName: {
      control: "text",
    },
    brandName: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Default: Story = {
  args: {
    isFavorite: false
  },

  render: (args) => (
    <Flex style={{ width: 280 }}>
      <CardComponent {...args} />
    </Flex>
  )
};