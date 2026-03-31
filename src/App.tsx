import { Routes, Route } from "react-router-dom";
import StashDashboard from "./Content/Stash/StashDashboard.tsx";
import SwatchDashboard from "./Content/Swatches/SwatchDashboard.tsx";
import DashboardHeader from "./Components/Header/DashboardHeader.tsx";
import StashFooter from "./Components/Footer/Footer.tsx";
import { Layout } from "antd";
import "./App.css";

import DashboardSubheader from "./Components/Header/DashboardSubheader.tsx";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>
          <DashboardHeader />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<StashDashboard />} />
            <Route path="/swatches" element={<SwatchDashboard />} />
          </Routes>
        </Content>
        <Footer>
        <StashFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
