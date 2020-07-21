import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkplaces } from "data/fetch/workplaces.fetch";
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

const UserFormJob = ({ user, form, setForm, handleInput }) => {
  const workplaces = useSelector((state) => state.workplacesReducer.workplaces);
  const dispatch = useDispatch();
  const [jobTypes, setJobTypes] = useState([
    {
      id: 1,
      title: "handlowiec",
      value: "handlowiec",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 2,
      title: "kierownik",
      value: "kierownik",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 3,
      title: "dyrektor",
      value: "dyrektor",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 4,
      title: "prezes",
      value: "prezes",
      selected: false,
      category: "job",
      key: "position",
    },
  ]);
  const [workplaceTypes, setWorkplaceTypes] = useState([]);

  useEffect(() => {
    dispatch(getWorkplaces());
  }, []);

  useEffect(() => {
    setWorkplaceTypes(
      workplaces.map((item, index) => ({
        id: index + 1,
        title: item.workplaceData.name,
        value: item.workplaceData.name,
        selected: false,
        category: "job",
        key: "workplace",
      }))
    );
  }, [workplaces]);

  return (
    <>
      <SectionWrapper>
        <SectionWrapperHeader>Dane zatrudnienia:</SectionWrapperHeader>
        <InputField>
          <InputLabel>Stanowisko pracy:</InputLabel>
          <WrapperForCheck>
            <Dropdown
              title="wybierz stanowisko"
              user={user}
              items={jobTypes}
              setItems={setJobTypes}
              form={form}
              setForm={setForm}
              typesCategory="job"
              typesCategoryKey="position"
              dropdownClass="dropdown-job"
            />
            {jobTypes.some((item) => item.selected === true) ? (
              <InputCheckImg
                src={checkIcon}
                alt="ikona sprawdzenia"
                className="dropdown-check"
              />
            ) : null}
          </WrapperForCheck>
        </InputField>
        <InputField>
          <InputLabel>Miejsce pracy:</InputLabel>
          <WrapperForCheck>
            <Dropdown
              title="wybierz oddział"
              user={user}
              items={workplaceTypes}
              setItems={setWorkplaceTypes}
              form={form}
              setForm={setForm}
              typesCategory="job"
              typesCategoryKey="workplace"
              dropdownClass="dropdown-job"
            />
            {workplaceTypes.some((item) => item.selected === true) ? (
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

export default UserFormJob;
