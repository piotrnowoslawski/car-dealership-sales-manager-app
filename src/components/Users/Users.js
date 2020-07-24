import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import {
  TableHeaderList,
  UsersTable,
  Search,
  Pagination,
  TableNoDataInfo,
} from "components";
import {
  UsersTableContainer,
  UsersTableHeader,
  UsersTableFooter,
} from "./Users.css";
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
  const pending = useSelector((state) => state.usersReducer.pending);
  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [rememberPage, setRememberPage] = useState(1);
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
        item.personalData.firstName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.personalData.lastName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.personalData.pesel
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
    );
    setUsersToDisplay(searched);

    const input = document.getElementById("search-users");
    let timeout = null;

    if (input.value.length == 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setCurrentPage(rememberPage);
        setRememberPage(rememberPage);
      }, 100);
    }
  };

  const handlePaginate = (number) => {
    setCurrentPage(number);
    setRememberPage(number);
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
              { id: 2, title: "" },
              { id: 3, title: "Nazwisko" },
              { id: 4, title: "Imię" },
              { id: 5, title: "Uprawnienia" },
              { id: 6, title: "Stanowisko" },
              { id: 7, title: "Miejsce pracy" },
              { id: 8, title: "Pesel" },
            ]}
            styleClass={"users-table-style"}
          />
        </UsersTableHeader>
        {pending ? (
          <TableNoDataInfo text={"Wczytywanie danych"} />
        ) : (
          <UsersTable users={currentUsers} />
        )}
        <UsersTableFooter>
          <Pagination
            items={users}
            itemsPerPage={usersPerPage}
            totalItems={usersToDisplay.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
            setCurrentPage={setCurrentPage}
            setRememberPage={setRememberPage}
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
