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
      {users.length === 0 ? (
        <TableNoDataInfo text={"Brak użytkowników"} />
      ) : (
        <UsersList>
          {users.map((item, index) => (
            <UsersListItem key={item._id}>
              <StyledLink to={`/dashboard/users/${item._id}`}>
                <LinkSpan>{index + 1}</LinkSpan>
                <LinkSpan>{item.lastName}</LinkSpan>
                <LinkSpan>{item.firstName}</LinkSpan>
                <LinkSpan>{}</LinkSpan>
                <LinkSpan>{}</LinkSpan>
                <LinkSpan>{}</LinkSpan>
                <LinkSpan>{item.peselNumber}</LinkSpan>
              </StyledLink>
            </UsersListItem>
          ))}
        </UsersList>
      )}
    </>
  );
};

export default UsersTable;
