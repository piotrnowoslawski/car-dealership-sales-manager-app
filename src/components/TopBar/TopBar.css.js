import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.white.normal};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey.light};
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 290px;
  height: 49px;
  background: ${({ theme }) => theme.colors.white.normal};
`;

export const LogoImg = styled.img`
  height: 40px;
  width: auto;
  margin: 0 15px;
  transition: 0.5s;

  ${StyledLink}:hover & {
    filter: brightness(0%);
  }
`;

export const LogoText = styled.span`
  line-height: 50px;
  color: ${({ theme }) => theme.colors.blue.main};
  font-weight: 600;
  transition: 0.5s;

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.colors.black.normal};
  }
`;
