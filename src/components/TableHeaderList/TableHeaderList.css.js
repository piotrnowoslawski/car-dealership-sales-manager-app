import styled from "styled-components";

export const TableList = styled.ul`
  display: flex;
`;

export const TableListItem = styled.li`
  padding: 0 5px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white.normal};

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
