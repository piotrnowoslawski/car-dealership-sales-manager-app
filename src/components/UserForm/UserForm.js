import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";
import { Prompt } from "react-router-dom";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import {
  UserFormContainer,
  UserFormInputsWrapper,
  UserFormHeader,
  UserFormHeaderImg,
  UserFormHeaderName,
} from "./UserForm.css";
import {
  UserFormPersonalData,
  UserFormJob,
  UserFormAddress,
  UserFormContact,
  UserFormApps,
} from "components";
import {
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
} from "../Buttons/Buttons";
import maleIcon from "images/user/user-male-icon2.png";
import femaleIcon from "images/user/user-female-icon2.png";
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
      email: "",
      privatePhone: "",
      businessPhone: "",
      landlinePhone: "",
      skype: "",
    },
    role: "",
  });
  const users = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setForm(user);
    }
  }, [user]);

  const handleInput = (e, category) => {
    setForm({
      ...form,
      [category]: {
        ...form[category],
        [e.target.id]: e.target.value,
      },
    });
  };

  const peselCheck = (users) => {
    let peselCheck = users.some(
      (item) => item.personalData.pesel === form.personalData.pesel
    );
    let idEqualCheck = users.some((item) => item._id === form._id);

    let peselAndIdEqualCheck = users.some(
      (item) =>
        item.personalData.pesel === form.personalData.pesel &&
        item._id === form._id
    );

    if (peselCheck && !idEqualCheck) {
      alert("Podany numer pesel istnieje w bazie danych");
      return;
    } else if (peselCheck && !peselAndIdEqualCheck) {
      alert("Podany numer pesel istnieje w bazie danych");
      return;
    } else {
      handleForm(form);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    peselCheck(users);
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
      <UserFormHeader>
        {form.personalData.gender ? (
          <UserFormHeaderImg
            src={form.personalData.gender === 1 ? femaleIcon : maleIcon}
            alt="ikona użytkownika"
          />
        ) : null}
        <UserFormHeaderName>{`${
          form.personalData.lastName ? form.personalData.lastName : "Wprowadź"
        } ${
          form.personalData.firstName
            ? form.personalData.firstName
            : "dane poniżej"
        }`}</UserFormHeaderName>
      </UserFormHeader>
      <UserFormContainer onSubmit={(e) => handleSubmit(e)}>
        <Prompt message="Czy chcesz wykonać operację?" />
        <UserFormInputsWrapper>
          <UserFormPersonalData
            user={user}
            form={form}
            setForm={setForm}
            handleInput={handleInput}
          />
          <UserFormJob
            user={user}
            form={form}
            setForm={setForm}
            handleInput={handleInput}
          />
          <UserFormAddress
            user={user}
            form={form}
            setForm={setForm}
            handleInput={handleInput}
          />
          <UserFormContact
            user={user}
            form={form}
            setForm={setForm}
            handleInput={handleInput}
          />
          {/* <UserFormApps /> */}
        </UserFormInputsWrapper>
        <ButtonsContainer>
          <Button black onClick={(e) => handleCancel(e)}>
            <ButtonImg src={cancelButtonIcon} alt="przycisk anuluj" />
            <ButtonText>Anuluj</ButtonText>
          </Button>
          <Button
            green
            type="submit"
            disabled={false}
            disabled={
              form.personalData.firstName &&
              form.personalData.lastName &&
              form.personalData.pesel &&
              form.personalData.gender
                ? false
                : true
            }
          >
            <ButtonImg src={saveButtonIcon} alt="przycisk zapisz" />
            <ButtonText>{submitText}</ButtonText>
          </Button>
        </ButtonsContainer>
      </UserFormContainer>
    </>
  );
};

export default UserForm;
