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
  UsersTableFooter,
} from "./Users.css";
import { TableHeaderList } from "components";
import { UsersTable } from "components";
import { Pagination } from "components";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const dispatch = useDispatch();
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersToDisplay.slice(indexOfFirstUser, indexOfLastUser);

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

  const handlePaginate = (number) => setCurrentPage(number);

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
        <UsersTable users={currentUsers} />
        <UsersTableFooter>
          <Pagination
            itemsPerPage={usersPerPage}
            totalItems={usersToDisplay.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
            setCurrentPage={setCurrentPage}
          />
        </UsersTableFooter>
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
