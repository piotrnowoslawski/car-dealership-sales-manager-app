import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkplace } from "data/fetch/workplaceInfo.fetch";
import {
  SectionWrapper,
  Section,
  SectionHeader,
  DataContainer,
  DataSection,
  DataName,
  DataContent,
} from "../UserInfo/UserInfo.css";

const UserInfoJob = ({ user }) => {
  const workplace = useSelector(
    (state) => state.workplaceInfoReducer.workplace
  );
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkplace(user.job.workplace));
  }, [user]);

  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Dane zatrudnienia:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName>Stanowisko:</DataName>
              <DataContent>{jobs[user.job.position - 1].title}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Miejsce pracy:</DataName>
              <DataContent>
                {Object.keys(workplace).length !== 0
                  ? workplace.workplaceData.name
                  : ""}
              </DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoJob;
