import { YarnBall } from "@boxicons/react/YarnBall";
import './header.css';
import { Flex, Layout, Button } from 'antd';

type User = {
  name: string;
};

const { Header: AntdHeader } = Layout;


export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <AntdHeader>
    <div className="storybook-header">
      <Flex align='center'>
        <YarnBall />
        <h1>Yarn Stash</h1>
      </Flex>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout}>Log out</Button>
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin}>Log in</Button>
            <Button size="small" onClick={onCreateAccount}>Sign up</Button>
          </>
        )}
      </div>
    </div>
  </AntdHeader>
);


export default Header;