import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const PaginationNav = styled.nav`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.white.smoke};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.grey.dark};
`;

export const PaginationList = styled.ul`
  display: flex;
`;

export const PaginationListItem = styled.li`
  position: relative;
  width: 25px;
  height: 25px;
  text-align: center;
  border-right: solid 1px ${({ theme }) => theme.colors.grey.dark};
  transition: 0.5s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.dark};
  }
`;

export const StyledLink = styled(NavLink).attrs({ active })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 3px;
  line-height: 20px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.blue.main};
  transition: 0.5s;

  &.${active} {
    background: ${({ theme }) => theme.colors.blue.main};
    color: ${({ theme }) => theme.colors.white.normal};
  }
`;
