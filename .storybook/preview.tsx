import type { Preview } from "@storybook/react";
import { ConfigProvider } from "antd";
import theme from "../src/theme/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;