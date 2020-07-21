import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const UsersList = styled.ul`
  background: ${({ theme }) => theme.colors.white.lightSmoke};
  border: solid 1px ${({ theme }) => theme.colors.grey.light};
  border-top: none;
  border-bottom: none;
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

export const StyledLink = styled(NavLink).attrs({
  active,
})`
  display: flex;
`;

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.colors.black.normal};
  padding: 0 5px;
  line-height: 30px;
  border-right: solid 1px ${({ theme }) => theme.colors.grey.light};

  &:nth-child(1) {
    width: 50px;
  }
  &:nth-child(3) {
    width: 200px;
  }
  &:nth-child(4) {
    width: 120px;
  }
  &:nth-child(5) {
    width: 140px;
  }
  &:nth-child(6) {
    width: 120px;
  }
  &:nth-child(7) {
    width: 140px;
  }
  &:nth-child(8) {
    width: 140px;
    border-right: none;
  }
`;

export const LinkImg = styled.img`
  height: 30px;
  width: 30px;
  border-right: solid 1px ${({ theme }) => theme.colors.grey.light};
`;
