import React, { useEffect } from "react";
import { Dropdown } from "components";
import {
  SectionWrapper,
  SectionWrapperHeader,
  InputField,
  InputLabel,
  Input,
} from "../UserForm/UserForm.css";

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
          <Input
            type="text"
            id="firstName"
            placeholder="imię"
            value={form.personalData.firstName}
            onChange={(e) => handleInput(e, "personalData")}
          />
        </InputField>
        <InputField>
          <InputLabel htmlFor="secondName">Drugie imię:</InputLabel>
          <Input
            type="text"
            id="secondName"
            placeholder="drugie imię"
            value={form.personalData.secondName}
            onChange={(e) => handleInput(e, "personalData")}
          />
        </InputField>
        <InputField>
          <InputLabel htmlFor="lastName">Nazwisko:</InputLabel>
          <Input
            type="text"
            id="lastName"
            placeholder="nazwisko"
            value={form.personalData.lastName}
            onChange={(e) => handleInput(e, "personalData")}
          />
        </InputField>
        <InputField>
          <InputLabel htmlFor="pesel">Pesel:</InputLabel>
          <Input
            type="text"
            id="pesel"
            placeholder="pesel"
            value={form.personalData.pesel}
            onChange={(e) => handleInput(e, "personalData")}
          />
        </InputField>
        <InputField>
          <Dropdown
            title="Wybierz płeć"
            items={dropdownTypes}
            toggleSelected={toggleSelected}
            dropdownClass="dropdown-gender"
          />
        </InputField>
      </SectionWrapper>
    </>
  );
};

export default UserFormPersonalData;
