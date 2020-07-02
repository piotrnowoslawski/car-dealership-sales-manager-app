import styled from "styled-components";

export const Container = styled.nav `
  display: flex;
  background: ${({ theme }) => theme.colors.grey.light};
  height: 50px;
`;

export const List = styled.ul `
  display: flex;
`;