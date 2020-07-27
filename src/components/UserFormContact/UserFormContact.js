import React from "react";
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

const UserFormContact = ({ user, form, setForm, handleInput }) => {
  return (
    <>
      <SectionWrapper>
        <SectionWrapperHeader>Dane kontaktowe:</SectionWrapperHeader>
        <InputField>
          <InputLabel htmlFor="email">Email:</InputLabel>
          <WrapperForCheck>
            <Input
              type="email"
              id="email"
              placeholder="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="niepoprawny format adresu email"
              value={form.contacts.email}
              onChange={(e) => handleInput(e, "contacts")}
            />
            {form.contacts.email ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="businessPhone">Telefon służbowy:</InputLabel>
          <WrapperForCheck>
            <Input
              type="tel"
              id="businessPhone"
              placeholder="format: 123-456-789"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              title="Format: 123-456-789"
              value={form.contacts.businessPhone}
              onChange={(e) => handleInput(e, "contacts")}
            />
            {form.contacts.businessPhone ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="privatePhone">Telefon prywatny:</InputLabel>
          <WrapperForCheck>
            <Input
              type="tel"
              id="privatePhone"
              placeholder="format: 123-456-789"
              pattern="[0-9]{0,3}-[0-9]{0,3}-[0-9]{3}"
              title="Format: 123-456-789"
              value={form.contacts.privatePhone}
              onChange={(e) => handleInput(e, "contacts")}
            />
            {form.contacts.privatePhone ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel htmlFor="skype">Skype:</InputLabel>
          <WrapperForCheck>
            <Input
              type="text"
              id="skype"
              placeholder="skype"
              pattern="[0-9\-]{0,}"
              title="Tylko cyfry oraz znam '-'"
              value={form.contacts.skype}
              onChange={(e) => handleInput(e, "contacts")}
            />
            {form.contacts.skype ? (
              <InputCheckImg src={checkIcon} alt="ikona sprawdzenia" />
            ) : null}
          </WrapperForCheck>
        </InputField>
      </SectionWrapper>
    </>
  );
};

export default UserFormContact;
