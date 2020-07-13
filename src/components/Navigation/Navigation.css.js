import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.grey.light};
  height: 100vh;
  min-width: 240px;
  overflow: hidden;
`;

export const List = styled.ul`
  margin-top: 20px;
  padding: 0 0 0 ${({ theme }) => theme.spacing.md}px;
`;

export const ListItem = styled.li`
  height: 40px;
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
    border-top: 10px solid transparent;
    border-right: 16px solid ${({ theme }) => theme.colors.grey.light};
    border-bottom: 10px solid transparent;
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
  height: 40px;
  margin-right: 15px;

  ${StyledLink}:hover & {
    transform: scale(1.2);
  }
`;

export const ListItemText = styled.span`
  line-height: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black.normal};
  transition: 0.5s;

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
