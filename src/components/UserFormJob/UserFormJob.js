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
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  const workplaces = useSelector((state) => state.workplacesReducer.workplaces);
  const dispatch = useDispatch();
  const [jobTypes, setJobTypes] = useState(jobs);
  const [workplaceTypes, setWorkplaceTypes] = useState([]);

  useEffect(() => {
    dispatch(getWorkplaces());
  }, []);

  useEffect(() => {
    setWorkplaceTypes(
      workplaces.map((item, index) => ({
        id: item._id,
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
              searchActive={false}
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
          {workplaceTypes.length !== 0 ? (
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
                searchActive={false}
              />
              {workplaceTypes.some((item) => item.selected === true) ? (
                <InputCheckImg
                  src={checkIcon}
                  alt="ikona sprawdzenia"
                  className="dropdown-check"
                />
              ) : null}
            </WrapperForCheck>
          ) : null}
        </InputField>
      </SectionWrapper>
    </>
  );
};

export default UserFormJob;
