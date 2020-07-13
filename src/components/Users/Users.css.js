import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const UsersTableContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 20px;
`;

export const UsersTableHeader = styled.div`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.colors.grey.light};
  border-radius: 5px 5px 0px 0px;
`;

export const UsersList = styled.ul``;

export const UsersListItem = styled.li``;

export const StyledLink = styled(NavLink).attrs({ active })``;
