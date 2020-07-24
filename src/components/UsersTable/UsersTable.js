import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkplaces } from "data/fetch/workplaces.fetch";
import {
  UsersList,
  UsersListItem,
  StyledLink,
  LinkSpan,
  LinkImg,
} from "./UsersTable.css";
import { TableNoDataInfo } from "components";
import maleIcon from "images/user/user-male-icon.png";
import femaleIcon from "images/user/user-female-icon.png";

const UsersTable = ({ users }) => {
  const workplaces = useSelector((state) => state.workplacesReducer.workplaces);
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkplaces(workplaces));
  }, [users]);

  const setWorkplace = (item) => {
    let index = workplaces.findIndex(
      (workplace) => workplace._id === item.job.workplace
    );
    return workplaces[index].workplaceData.name;
  };

  return (
    <>
      {users && users.length === 0 ? (
        <TableNoDataInfo text={"Brak użytkowników"} />
      ) : (
        <UsersList>
          {users &&
            users.map((item, index) => (
              <UsersListItem key={item._id}>
                <StyledLink to={`/dashboard/users/${item._id}`}>
                  <LinkSpan>{index + 1}</LinkSpan>
                  <LinkImg
                    src={
                      item.personalData.gender === "mężczyzna"
                        ? maleIcon
                        : femaleIcon
                    }
                    ale="ikona użytkownika"
                  />
                  <LinkSpan>{item.personalData.lastName}</LinkSpan>
                  <LinkSpan>{item.personalData.firstName}</LinkSpan>
                  <LinkSpan>{}</LinkSpan>
                  <LinkSpan>{jobs[item.job.position - 1].title}</LinkSpan>
                  <LinkSpan>{workplaces && setWorkplace(item)}</LinkSpan>
                  <LinkSpan>{item.personalData.pesel}</LinkSpan>
                </StyledLink>
              </UsersListItem>
            ))}
        </UsersList>
      )}
    </>
  );
};

export default UsersTable;
