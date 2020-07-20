import React from "react";
import {
  UsersList,
  UsersListItem,
  StyledLink,
  LinkSpan,
} from "./UsersTable.css";
import { TableNoDataInfo } from "components";

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
                  <LinkSpan>{item.personalData.lastName}</LinkSpan>
                  <LinkSpan>{item.personalData.firstName}</LinkSpan>
                  <LinkSpan>{}</LinkSpan>
                  <LinkSpan>{}</LinkSpan>
                  <LinkSpan>{item.personalData.gender}</LinkSpan>
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
