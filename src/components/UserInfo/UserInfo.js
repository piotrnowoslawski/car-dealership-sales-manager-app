import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "data/fetch/userInfo.fetch";
import { deleteUser } from "data/fetch/userManagement.fetch";
import {
  DashboardHeader,
  DashboardHeaderImg,
  DashboardHeaderText,
} from "components/DashboardHeader/DashboardHeader";
import {
  UserViewContainer,
  UserViewHeader,
  UserViewContent,
  UserViewHeaderImg,
  UserViewHeaderName,
  UserViewHeaderJobPosition,
} from "./UserInfo.css";
import {
  UserInfoPersonalData,
  UserInfoJob,
  UserInfoAddress,
  UserInfoContact,
  UserInfoApps,
} from "components";
import {
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
} from "../Buttons/Buttons";
import userInfoHeaderIcon from "images/headers/header-user-info-icon.png";
import closeButtonIcon from "images/buttons/button-close-icon.png";
import deleteButtonIcon from "images/buttons/button-delete-icon.png";
import editButtonIcon from "images/buttons/button-edit-user-icon.png";
import maleIcon from "images/user/user-male-icon2.png";
import femaleIcon from "images/user/user-female-icon2.png";

const UserInfo = () => {
  const { userId } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.userInfoReducer.user);
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  const handleDelete = (e) => {
    const answer = window.confirm("Czy napewno chcesz usunąć użytkownika?");
    if (answer) {
      dispatch(deleteUser(userId, history));
    } else return;
  };

  return (
    <>
      <DashboardHeader>
        <DashboardHeaderText>Widok użytkownika</DashboardHeaderText>
        <DashboardHeaderImg
          src={userInfoHeaderIcon}
          alt="ikona widoku użytkownika"
        />
      </DashboardHeader>
      {Object.keys(user).length !== 0 ? (
        <UserViewContainer>
          <UserViewHeader>
            <UserViewHeaderImg
              src={user.personalData.gender === 1 ? femaleIcon : maleIcon}
              alt="ikona użytkownika"
            />
            <UserViewHeaderName>{`${user.personalData.lastName} ${user.personalData.firstName}`}</UserViewHeaderName>
            <UserViewHeaderJobPosition>{`${
              user.job.position
                ? jobs[user.job.position - 1].title
                : "nie dotyczy"
            }`}</UserViewHeaderJobPosition>
          </UserViewHeader>
          <UserViewContent>
            <UserInfoPersonalData user={user} />
            <UserInfoJob user={user} />
            <UserInfoAddress user={user} />
            <UserInfoContact user={user} />
            {/* <UserInfoApps user={user} /> */}
          </UserViewContent>
        </UserViewContainer>
      ) : null}
      <ButtonsContainer>
        <Link to="/dashboard/users">
          <Button black>
            <ButtonImg src={closeButtonIcon} alt="przycisk zamknij" />
            <ButtonText>Zamknij</ButtonText>
          </Button>
        </Link>
        <Button red onClick={(e) => handleDelete(e)}>
          <ButtonImg src={deleteButtonIcon} alt="przycisk usuń" />
          <ButtonText>Usuń</ButtonText>
        </Button>
        <Link to={`/dashboard/users/${userId}/edit`}>
          <Button green>
            <ButtonImg src={editButtonIcon} alt="przycisk edycji" />
            <ButtonText>Edytuj</ButtonText>
          </Button>
        </Link>
      </ButtonsContainer>
    </>
  );
};

export default UserInfo;
