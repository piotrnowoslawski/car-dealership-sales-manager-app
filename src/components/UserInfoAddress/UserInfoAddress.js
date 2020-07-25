import React from "react";
import { useSelector } from "react-redux";
import {
  SectionWrapper,
  Section,
  SectionHeader,
  DataContainer,
  DataSection,
  DataName,
  DataContent,
} from "../UserInfo/UserInfo.css";

const UserInfoAddress = ({ user }) => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  return (
    <>
      <SectionWrapper>
        <Section>
          <SectionHeader>Dane adresowe:</SectionHeader>
          <DataContainer>
            <DataSection>
              <DataName>Ulica:</DataName>
              <DataContent>{user.address.street}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Numer domu:</DataName>
              <DataContent>{user.address.propertyNumber}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Numer lokalu:</DataName>
              <DataContent>
                {user.address.apartmentNumber
                  ? user.address.apartmentNumber
                  : "nie dotyczy"}
              </DataContent>
            </DataSection>
            <DataSection>
              <DataName>Miasto:</DataName>
              <DataContent>{user.address.city}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Kod pocztowy:</DataName>
              <DataContent>{user.address.zipCode}</DataContent>
            </DataSection>
            <DataSection>
              <DataName>Kraj:</DataName>
              <DataContent>
                {user.address.country &&
                  countries[user.address.country - 1].text}
              </DataContent>
            </DataSection>
          </DataContainer>
        </Section>
      </SectionWrapper>
    </>
  );
};

export default UserInfoAddress;
