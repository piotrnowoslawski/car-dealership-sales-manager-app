import styled from "styled-components";

export const UsersTableContainer = styled.div `
  width: 100%;
  height: auto;
  max-height: 600px;
  margin-top: 20px;
`;

export const UsersTableHeader = styled.div `
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
`;

export const UsersTableFooter = styled.div `
  position: relative;
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.grey.light};
  border-radius: 0px 0px 5px 5px;
`;