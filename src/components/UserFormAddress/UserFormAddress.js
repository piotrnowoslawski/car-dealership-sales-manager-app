import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  SectionWrapper,
  SectionWrapperHeader,
  InputField,
  InputLabel,
  Input,
  InputCheckImg,
  WrapperForCheck,
} from "../UserForm/UserForm.css";
import { Dropdown } from "components";
import checkIcon from "images/form/form-check-icon.png";

const UserFormAddress = ({ user, form, setForm, handleInput }) => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const [countrieTypes, setCountrieTypes] = useState(
    countries.map((item, index) => ({
      ...item,
      id: index + 1,
      title: item.text,
      value: item.value,
      selected: false,
      category: "address",
      key: "country",
    }))
  );

  return (
    <>
      <SectionWrapper>
        <SectionWrapperHeader>Dane adresowe:</SectionWrapperHeader>
        <InputField>
          <InputLabel htmlFor="street">Ulica:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="street"
              placeholder="ulica"
              pattern="[a-zA-Ząćśńółę. -]{3,}"
              title="Minimalna ilość znaków 3, tylko litery oraz znak '.'"
              value={form.address.street}
              onChange={(e) => handleInput(e, "address")}
            />
            {form.address.street ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="propertyNumber">Numer domu:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="propertyNumber"
              placeholder="numer domu"
              pattern="[0-9]{0,}"
              title="Tylko cyfry"
              value={form.address.propertyNumber}
              onChange={(e) => handleInput(e, "address")}
            />
            {form.address.propertyNumber ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="apartmentNumber">Numer lokalu:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="apartmentNumber"
              placeholder="numer lokalu"
              pattern="[0-9]{0,}"
              title="Tylko cyfry"
              value={form.address.apartmentNumber}
              onChange={(e) => handleInput(e, "address")}
            />
            {form.address.apartmentNumber ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="city">Miasto:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="city"
              placeholder="miasto"
              pattern="[a-zA-Ząćśńółę. -]{3,}"
              title="Minimalna ilość znaków 3, tylko litery"
              value={form.address.city}
              onChange={(e) => handleInput(e, "address")}
            />
            {form.address.city ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="zipCode">Kod pocztowy:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="zipCode"
              placeholder="kod pocztowy"
              pattern="[0-9]{0,2}-[0-9]{0,3}"
              title="Format: 00-000"
              value={form.address.zipCode}
              onChange={(e) => handleInput(e, "address")}
            />
            {form.address.zipCode ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel>Kraj:</InputLabel>
          <WrapperForCheck>
            <Dropdown
              title="wybierz kraj"
              user={user}
              items={countrieTypes}
              setItems={setCountrieTypes}
              form={form}
              setForm={setForm}
              typesCategory="address"
              typesCategoryKey="country"
              dropdownClass="dropdown-countries"
              searchActive={true}
            />
            {countrieTypes.some((item) => item.selected === true) ? (
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

export default UserFormAddress;
