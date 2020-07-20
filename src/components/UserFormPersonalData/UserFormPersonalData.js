import React, { useEffect } from "react";
import { Dropdown } from "components";
import {
  SectionWrapper,
  SectionWrapperHeader,
  InputField,
  InputLabel,
  Input,
  InputCheckImg,
  WrapperForCheck,
} from "../UserForm/UserForm.css";
import checkIcon from "images/form/form-check-icon.png";

const UserFormPersonalData = ({
  user,
  form,
  setForm,
  dropdownTypes,
  setDropdownTypes,
  handleInput,
  toggleSelected,
}) => {
  const genderTypes = [
    {
      id: 1,
      title: "kobieta",
      value: "kobieta",
      selected: false,
      category: "personalData",
      key: "gender",
    },
    {
      id: 2,
      title: "mężczyzna",
      value: "mężczyzna",
      selected: false,
      category: "personalData",
      key: "gender",
    },
  ];

  useEffect(() => {
    setDropdownTypes(genderTypes);
  }, []);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setForm(user);
      setDropdownTypes(
        genderTypes.map((item) =>
          item.value === user.personalData.gender
            ? { ...item, selected: true }
            : { ...item, selected: false }
        )
      );
    }
  }, [user]);

  return (
    <>
      <SectionWrapper>
        <SectionWrapperHeader>Dane personalne:</SectionWrapperHeader>
        <InputField>
          <InputLabel htmlFor="firstName">Imię:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="firstName"
              placeholder="imię"
              value={form.personalData.firstName}
              onChange={(e) => handleInput(e, "personalData")}
            />
            {form.personalData.firstName ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="secondName">Drugie imię:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="secondName"
              placeholder="drugie imię"
              value={form.personalData.secondName}
              onChange={(e) => handleInput(e, "personalData")}
            />
            {form.personalData.secondName ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="lastName">Nazwisko:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="lastName"
              placeholder="nazwisko"
              value={form.personalData.lastName}
              onChange={(e) => handleInput(e, "personalData")}
            />
            {form.personalData.lastName ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="pesel">Pesel:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="pesel"
              placeholder="pesel"
              value={form.personalData.pesel}
              onChange={(e) => handleInput(e, "personalData")}
            />
            {form.personalData.pesel ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <WrapperForCheck>
            <Dropdown
              title="wybierz płeć"
              items={dropdownTypes}
              toggleSelected={toggleSelected}
              dropdownClass="dropdown-gender"
            />
            {dropdownTypes &&
            dropdownTypes.some((item) => item.selected === true) ? (
              <InputCheckImg
                src={checkIcon}
                alt="ikona sprawdzenia"
                className="dropdown-check"
              />
            ) : null}
          </WrapperForCheck>
        </InputField>
      </SectionWrapper>
    </>
  );
};

export default UserFormPersonalData;
