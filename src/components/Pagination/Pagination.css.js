import styled from "styled-components";
import { Link } from "react-router-dom";

const active = "active";

export const PaginationNav = styled.nav`
  position: absolute;
  display: flex;
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
  border-right: solid 1px ${({ theme }) => theme.colors.grey.dark};
  transition: 0.5s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.dark};
  }
`;

export const StyledLink = styled(Link).attrs({ active })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21px;
  height: 20px;
  border-radius: 3px;
  line-height: 20px;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.blue.main};
  transition: 0.5s;

  &.${active} {
    background: ${({ theme }) => theme.colors.blue.main};
    color: ${({ theme }) => theme.colors.white.normal};
  }
`;

export const StyledLinkArrow = styled(Link)`
  position: relative;
  width: 25px;
  height: 25px;
  transition: 0.5s;

  &:first-child {
    border-right: solid 1px ${({ theme }) => theme.colors.grey.dark};
  }

  &:last-child {
    border-left: solid 1px ${({ theme }) => theme.colors.grey.dark};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.dark};
  }
`;

export const StyledLinkImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
`;
