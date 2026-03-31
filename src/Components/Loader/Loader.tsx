import { YarnBall } from "@boxicons/react";
import { Spin } from "antd";
import "./Loader.css";

const YarnLoader = () => {
  return <Spin indicator={<YarnBall className="yarn-spin" />} />;
};

export default YarnLoader;