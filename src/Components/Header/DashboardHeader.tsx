import { YarnBall } from "@boxicons/react/YarnBall";
import "./header.css";
import { Flex, Button, Typography } from "antd";
import Heading from "../Headings/Headings";
import { HelpCircle } from "@boxicons/react";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const DashboardHeader = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <Flex
    className="stash-header-container"
    align="center"
    justify="space-between"
  >
    <Flex align="center" justify="center" gap={8}>
      <Flex align="center" justify="center" gap={8}>
        <YarnBall size="lg" />
        <Heading level={1}>
          Stash
        </Heading>
      </Flex>
    </Flex>
    <div>
      {user ? (
        <>
          <Typography.Text className="welcome">
            Welcome, <b>{user.name}</b>!
          </Typography.Text>
          <Button color="default" variant="outlined">
            Log out
          </Button>
        </>
      ) : (
        <Flex align="center" justify="flex-start" gap={8}>
          <Button color="default" variant="outlined">
            Log in
          </Button>
          <Button color="default" variant="outlined">
            Log Out
          </Button>
        </Flex>
      )}
    </div>
  </Flex>
);

export default DashboardHeader;
