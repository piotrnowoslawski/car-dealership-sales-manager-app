import React from "react";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import saleHeaderIcon from "images/headers/header-sale-icon.png";

const Sale = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Sprzedaż</DashboardHeaderText>
        <DashboardHeaderImg src={saleHeaderIcon} alt="ikona sprzedaży" />
      </DashboardHeader>
    </>
  );
};

export default Sale;
