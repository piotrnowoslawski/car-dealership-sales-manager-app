import React from "react";
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
                  <LinkSpan>{item.job.position}</LinkSpan>
                  <LinkSpan>{}</LinkSpan>
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
