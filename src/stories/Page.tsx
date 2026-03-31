import React from "react";

import DashboardHeader from "../Components/Header/DashboardHeader";
import "./page.css";
import DashboardSubheader from "../Components/Header/DashboardSubheader";
import { Layout } from "antd";
import StashMasonry from "../Components/Masonry/Masonry";
import "../App.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <>
      <Layout.Header>
        <DashboardHeader />
        <DashboardSubheader />
      </Layout.Header>
      <Layout.Content>
        <StashMasonry />
      </Layout.Content>
    </>
  );
};
