import React, { useState, useEffect } from "react";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
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
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [peselNumber, setPeselNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [propertyNumber, setPropertyNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [privetPhone, setPrivetPhone] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [education, setEducation] = useState("");
  const [dateOfEmployment, setDateOfEmployment] = useState("");
  const [dateOfTermination, setDateOfTermination] = useState("");

  useEffect(() => {
    if (user) {
      setId(user._id);
      setFirstName(user.firstName);
      setSecondName(user.secondName);
      setLastName(user.lastName);
      setPeselNumber(user.peselNumber);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      _id: id,
      firstName: firstName,
      secondName: secondName,
      lastName: lastName,
      peselNumber: peselNumber,
      gender: "",
      dateOfBirth: "",
      street: "",
      propertyNumber: "",
      apartmentNumber: "",
      city: "",
      zipCode: "",
      email: "",
      privetPhone: "",
      businessPhone: "",
      jobPosition: "",
      workplace: "",
      education: "",
      dateOfEmployment: "",
      dateOfTermination: "",
    };
    handleForm(user);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="firstName">Imię:</label>
          <input
            type="text"
            id="firstName"
            placeholder="imię"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="secondName">Drugie imię:</label>
          <input
            type="text"
            id="secondName"
            placeholder="drugie imię"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Nazwisko:</label>
          <input
            type="text"
            id="lastName"
            placeholder="nazwisko"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="peselNumber">Pesel:</label>
          <input
            type="text"
            id="peselNumber"
            placeholder="pesel"
            value={peselNumber}
            onChange={(e) => setPeselNumber(e.target.value)}
          />
        </div>
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
      </form>
    </>
  );
};

export default UserForm;
