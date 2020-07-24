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

const UserInfoContact = ({ user }) => {
  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Dane kontaktowe:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName>Email:</DataName>
              <DataContent>{user.contacts.email}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Telefon służbowy:</DataName>
              <DataContent>{user.contacts.businessPhone}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Telefon prywatny:</DataName>
              <DataContent>{user.contacts.privatePhone}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Skype:</DataName>
              <DataContent>{user.contacts.apps.skype}</DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoContact;
