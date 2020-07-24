import styled from "styled-components";

export const TableList = styled.ul`
  display: flex;

  & > li:nth-child(1) {
    width: 50px;
  }
  &.users-table-style > li:nth-child(2) {
    width: 30px;
  }
  &.users-table-style > li:nth-child(3) {
    width: 200px;
  }
  &.users-table-style > li:nth-child(4) {
    width: 100px;
  }
  &.users-table-style > li:nth-child(5) {
    width: 140px;
  }
  &.users-table-style > li:nth-child(6) {
    width: 120px;
  }
  &.users-table-style > li:nth-child(7) {
    width: 180px;
  }
  &.users-table-style > li:nth-child(8) {
    width: 120px;
    max-width: 120px;
  }

  &.workplacess-table-style > li:nth-child(2) {
    width: 240px;
  }

  &.workplacess-table-style > li:nth-child(3) {
    width: 200px;
  }
`;

export const TableListItem = styled.li`
  padding: 0 5px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white.normal};
`;
