import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const UserFormPersonalData = ({ user, form, setForm, handleInput }) => {
  const gender = useSelector((state) => state.genderReducer.gender);
  const [genderTypes, setGenderTypes] = useState(gender);

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
          <InputLabel>Płeć:</InputLabel>
          <WrapperForCheck>
            <Dropdown
              title="wybierz płeć"
              user={user}
              items={genderTypes}
              setItems={setGenderTypes}
              form={form}
              setForm={setForm}
              typesCategory="personalData"
              typesCategoryKey="gender"
              dropdownClass="dropdown-gender"
              searchActive={false}
            />
            {genderTypes.some((item) => item.selected === true) ? (
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
