import { Flex, Tooltip } from "antd";
import TitleComponent from "../Headings/Headings";
import Button from "../Button/Button";
import "./header.css";
import { HelpCircle, Paragraph } from "@boxicons/react";

const DashboardSubheader = () => {
  return (
    <Flex className="stash-subheader-container" justify="space-between">
      <Flex className="stash-subheader" align="flex-start" vertical>
        <TitleComponent level={2}>Yarns</TitleComponent>
      </Flex>
      <Flex align="center" className="stash-subheader-buttons" gap={8}>
        <Tooltip title="Select a yarn weight to filter your stash.">
        <HelpCircle />
        </Tooltip>
        <Button color="default" variant="outlined">
          Aran
        </Button>
        <Button color="default" variant="outlined">
          Worsted
        </Button>
        <Button color="default" variant="outlined">
          Dk
        </Button>
        <Button type="primary">Add to Stash</Button>
      </Flex>
      <p>Sort by Meterage</p>
    </Flex>
  );
};

export default DashboardSubheader;
