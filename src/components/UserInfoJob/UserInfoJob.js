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
    user.job.workplace && dispatch(getWorkplace(user.job.workplace));
  }, [user]);

  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Dane zatrudnienia:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName>Stanowisko:</DataName>
              <DataContent>
                {user.job.position
                  ? jobs[user.job.position - 1].title
                  : "nie dotyczy"}
              </DataContent>
            </DataSection>
            <DataSection>
              <DataName>Miejsce pracy:</DataName>
              <DataContent>
                {user.job.workplace && Object.keys(workplace).length !== 0
                  ? workplace.workplaceData.name
                  : "nie dotyczy"}
              </DataContent>
            </DataSection>
            <DataSection>
              <DataName>Data zatrudnienia:</DataName>
              <DataContent>{user.job.dateOfEmployment}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Data zakończenia pracy:</DataName>
              <DataContent>{user.job.dateOfTermination}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Przełożony:</DataName>
              <DataContent>{user.job.supervisor}</DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoJob;
