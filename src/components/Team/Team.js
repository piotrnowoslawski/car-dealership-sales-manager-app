import React from "react";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import teamHeaderIcon from "images/headers/header-team-icon.png";

const Team = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Mój zespół</DashboardHeaderText>
        <DashboardHeaderImg src={teamHeaderIcon} alt="ikona zespołu" />
      </DashboardHeader>
    </>
  );
};

export default Team;
