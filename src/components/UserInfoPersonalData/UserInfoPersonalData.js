import React from "react";
import {
  SectionWrapper,
  Section,
  SectionHeader,
  DataContainer,
  DataSection,
  DataName,
  DataContent,
} from "../UserInfo/UserInfo.css";

const UserInfoPersonalData = ({ user }) => {
  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Dane personalne:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName>Nazwisko:</DataName>
              <DataContent>{user.personalData.lastName}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Imię:</DataName>
              <DataContent>{user.personalData.firstName}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Drugie imię:</DataName>
              <DataContent>
                {user.personalData.secondName
                  ? user.personalData.secondName
                  : "nie dotyczy"}
              </DataContent>
            </DataSection>
            <DataSection>
              <DataName>Pesel:</DataName>
              <DataContent>{user.personalData.pesel}</DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoPersonalData;
