import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import { Search } from "components";
import {
  UsersTableContainer,
  UsersTableHeader,
  UsersList,
  UsersListItem,
  StyledLink,
  LinkSpan,
} from "./Users.css";
import { TableHeaderList } from "components";
import {
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
} from "../Buttons/Buttons";
import usersHeaderIcon from "images/headers/header-users-icon.png";
import addButtonIcon from "images/buttons/button-add-user-icon.png";

const Users = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setUsersToDisplay(users);
  }, [users]);

  const handleSearch = (e) => {
    let searched = [...users].filter(
      (item) =>
        item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.peselNumber.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUsersToDisplay(searched);
  };

  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Użytkownicy</DashboardHeaderText>
        <DashboardHeaderImg src={usersHeaderIcon} alt="ikona użytkowników" />
        <Search handleSearch={handleSearch} />
      </DashboardHeader>
      <UsersTableContainer>
        <UsersTableHeader>
          <TableHeaderList
            items={[
              { id: 1, title: "Nr" },
              { id: 2, title: "Nazwisko" },
              { id: 3, title: "Imię" },
              { id: 4, title: "Uprawnienia" },
              { id: 5, title: "Stanowisko" },
              { id: 6, title: "Departament" },
              { id: 7, title: "Pesel" },
            ]}
          />
        </UsersTableHeader>
        <UsersList>
          {usersToDisplay.map((item, index) => (
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
      </UsersTableContainer>
      <ButtonsContainer>
        <Link to="/dashboard/users/new">
          <Button green>
            <ButtonImg src={addButtonIcon} alt="przycisk dodaj użytkownika" />
            <ButtonText>Dodaj użytkownika</ButtonText>
          </Button>
        </Link>
      </ButtonsContainer>
    </>
  );
};

export default Users;
