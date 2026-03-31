import React from "react";
import DashboardHeader from "../../Components/Header/DashboardHeader.tsx";
import StashMasonry from "../../Components/Masonry/Masonry.tsx";
import "./StashDashboard.less";
import DashboardSubheader from "../../Components/Header/DashboardSubheader.tsx";

const StashDashboard = () => {
  return (
    <div>
      <DashboardSubheader />
      <StashMasonry />
    </div>
  );
};

export default StashDashboard;
