import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const UsersTableContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 20px;
`;

export const UsersTableHeader = styled.div`
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
`;

export const UsersList = styled.ul`
  background: ${({ theme }) => theme.colors.white.lightSmoke};
  border: solid 1px ${({ theme }) => theme.colors.grey.light};
  border-top: none;
`;

export const UsersListItem = styled.li`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.white.smoke};
    transition: 0.5s;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.dark};
  }
`;

export const StyledLink = styled(NavLink).attrs({ active })`
  display: flex;
`;

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.colors.black.normal};
  padding: 0 5px;
  line-height: 30px;

  &:nth-child(1) {
    width: 50px;
  }
  &:nth-child(2) {
    width: 200px;
  }
  &:nth-child(3) {
    width: 120px;
  }
  &:nth-child(4) {
    width: 140px;
  }
  &:nth-child(5) {
    width: 120px;
  }
  &:nth-child(6) {
    width: 140px;
  }
  &:nth-child(7) {
    width: 140px;
  }
`;
