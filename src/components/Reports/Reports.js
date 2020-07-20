import React from "react";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import reportsHeaderIcon from "images/headers/header-reports-icon.png";

const Reports = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Raporty</DashboardHeaderText>
        <DashboardHeaderImg src={reportsHeaderIcon} alt="ikona raportów" />
      </DashboardHeader>
    </>
  );
};

export default Reports;
