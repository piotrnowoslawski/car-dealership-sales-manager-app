import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.grey.light};
  height: 100vh;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10;
  min-width: 240px;
  overflow: hidden;
  border-top: 10px solid ${({ theme }) => theme.colors.blue.main};
`;

export const List = styled.ul`
  margin-top: 20px;
  padding: 0 0 0 ${({ theme }) => theme.spacing.md}px;
`;

export const ListItem = styled.li`
  height: 35px;
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink).attrs({ active })`
  display: flex;
  position: relative;
  border-right: 0px solid transparent;
  transition: 0.5s;

  &:after {
    display: block;
    position: absolute;
    top: 10px;
    right: -20px;
    content: "";
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 17px solid ${({ theme }) => theme.colors.grey.light};
    border-bottom: 7px solid transparent;
  }

  &.${active} {
    border-right: 20px solid ${({ theme }) => theme.colors.blue.main};
  }

  &:hover {
    border-right: 20px solid ${({ theme }) => theme.colors.black.normal};
  }
`;

export const ListItemImg = styled.img`
  display: block;
  height: 35px;
  margin-right: 15px;

  ${StyledLink}:hover & {
    transform: scale(1.2);
  }
`;

export const ListItemText = styled.span`
  line-height: 35px;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black.normal};
  transition: 0.5s;

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
