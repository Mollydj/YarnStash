import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import DashboardHeader from "../Components/Header/DashboardHeader";
import { Layout } from "antd";
import DashboardSubheader from "../Components/Header/DashboardSubheader";

const { Header: AntdHeader, Footer, Sider, Content } = Layout;

const meta = {
  title: "Layout/Header",
  component: DashboardHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
export const SubHeader: Story = {
  render: () => <DashboardSubheader />,
};
