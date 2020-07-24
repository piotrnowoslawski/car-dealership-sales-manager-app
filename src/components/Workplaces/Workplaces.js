import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkplaces } from "data/fetch/workplaces.fetch";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import {
  WorkplacesContainer,
  WorkplacesHeader,
  WorkplacesHeaderSpan,
  WorkplacesManagementWrapper,
} from "./Workplaces.css";
import { WorkplacesTable } from "components";
import workplaceHeaderIcon from "images/headers/header-workplace-icon.png";

const Workplaces = () => {
  const workplaces = useSelector((state) => state.workplacesReducer.workplaces);
  const pending = useSelector((state) => state.workplacesReducer.pending);
  const [workplacesToDisplay, setWorkplacesToDisplay] = useState(workplaces);
  const [currentWorkplaceToDisplay, setCurrentWorkplaceToDisplay] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkplaces());
  }, []);

  useEffect(() => {
    setWorkplacesToDisplay(workplaces);
    setCurrentWorkplaceToDisplay(workplacesToDisplay[1]);
  }, [workplaces]);

  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Salony</DashboardHeaderText>
        <DashboardHeaderImg
          src={workplaceHeaderIcon}
          alt="ikona użytkowników"
        />
      </DashboardHeader>
      <WorkplacesContainer>
        <WorkplacesHeader>
          <WorkplacesHeaderSpan>Zarządzaj placówkami</WorkplacesHeaderSpan>
        </WorkplacesHeader>
        <WorkplacesManagementWrapper>
          <WorkplacesTable workplaces={workplaces} pending={pending} />
        </WorkplacesManagementWrapper>
      </WorkplacesContainer>
    </>
  );
};

export default Workplaces;
