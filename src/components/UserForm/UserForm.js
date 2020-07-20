import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import {
  UserFormContainer,
  SectionWrapper,
  SectionWrapperHeader,
} from "./UserForm.css";
import { UserFormPersonalData } from "components";
import {
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
} from "../Buttons/Buttons";
import cancelButtonIcon from "images/buttons/button-cancel-icon.png";
import saveButtonIcon from "images/buttons/button-save-icon.png";

const UserForm = ({
  user,
  handleForm,
  handleCancel,
  headerText,
  headerIconPath,
  headerIconTitle,
  submitText,
}) => {
  const [dropdownTypes, setDropdownTypes] = useState();
  const [form, setForm] = useState({
    _id: "",
    personalData: {
      firstName: "",
      secondName: "",
      lastName: "",
      pesel: "",
      gender: "",
      dateOfBirth: "",
    },
    job: {
      position: "",
      workplace: "",
      dateOfEmployment: "",
      dateOfTermination: "",
      supervisor: "",
    },
    address: {
      street: "",
      propertyNumber: "",
      apartmentNumber: "",
      zipCode: "",
      city: "",
      province: "",
      country: "",
    },
    contacts: {
      emial: "",
      privatePhone: "",
      businessPhone: "",
      landlinePhone: "",
    },
    apps: {
      skype: "",
    },
    role: "",
  });

  const handleInput = (e, category) => {
    setForm({
      ...form,
      [category]: {
        ...form[category],
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleDropdown = (e, id, selected, category, key, value) => {
    setDropdownTypes(
      dropdownTypes.map((item) =>
        item.id === id
          ? { ...item, selected: !selected }
          : { ...item, selected: false }
      )
    );
    setForm({
      ...form,
      [category]: {
        ...form[category],
        [key]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(form);
  };

  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>{headerText}</DashboardHeaderText>
        <DashboardHeaderImg
          src={require(`images/headers/header-${headerIconPath}-icon.png`)}
          alt={headerIconTitle}
        />
      </DashboardHeader>
      <UserFormContainer onSubmit={(e) => handleSubmit(e)}>
        <Prompt message="Czy chcesz wykonać operację?" />
        <UserFormPersonalData
          user={user}
          form={form}
          setForm={setForm}
          dropdownTypes={dropdownTypes}
          setDropdownTypes={setDropdownTypes}
          handleInput={handleInput}
          toggleSelected={handleDropdown}
        />
        <SectionWrapper>
          <SectionWrapperHeader>Dane zatrudnienia:</SectionWrapperHeader>
        </SectionWrapper>
        <SectionWrapper>
          <SectionWrapperHeader>Dane adresowe:</SectionWrapperHeader>
        </SectionWrapper>
        <SectionWrapper>
          <SectionWrapperHeader>Kontakt:</SectionWrapperHeader>
        </SectionWrapper>
        <SectionWrapper>
          <SectionWrapperHeader>Aplikacje:</SectionWrapperHeader>
        </SectionWrapper>
        <ButtonsContainer>
          <Button black onClick={(e) => handleCancel(e)}>
            <ButtonImg src={cancelButtonIcon} alt="przycisk anuluj" />
            <ButtonText>Anuluj</ButtonText>
          </Button>
          <Button green type="submit" disabled={false}>
            <ButtonImg src={saveButtonIcon} alt="przycisk zapisz" />
            <ButtonText>{submitText}</ButtonText>
          </Button>
        </ButtonsContainer>
      </UserFormContainer>
    </>
  );
};

export default UserForm;
