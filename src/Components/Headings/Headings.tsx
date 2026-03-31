import React from "react";
import { Typography } from "antd";
import "./Headings.css";

const { Title } = Typography;

interface TitleComponentProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  children,
  level = 1,
}) => {
  return <Title level={level} style={{ margin: 0 }}>{children}</Title>;
};

export default TitleComponent;