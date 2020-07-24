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

const UserInfoApps = ({ user }) => {
  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Aplikacje:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName></DataName>
              <DataContent></DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoApps;
