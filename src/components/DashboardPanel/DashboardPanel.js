import React from "react";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import dashboardHeaderIcon from "images/headers/header-dashboard-icon.png";

const DashboardPanel = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Panel zarządzania</DashboardHeaderText>
        <DashboardHeaderImg
          src={dashboardHeaderIcon}
          alt="ikona panelu zarządzania"
        />
      </DashboardHeader>
    </>
  );
};

export default DashboardPanel;
