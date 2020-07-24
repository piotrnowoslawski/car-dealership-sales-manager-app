import styled from "styled-components";

const active = "active";

export const WorkplacesTableContainer = styled.div`
  width: 40%;
  min-width: 490px;
  height: auto;
  margin-top: 20px;
`;

export const WorkplacesTableHeader = styled.h3`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
  color: ${({ theme }) => theme.colors.white.normal};
  line-height: 40px;
`;

export const TableList = styled.ul`
  border: solid 1px ${({ theme }) => theme.colors.grey.dark};
  border-top: none;
  border-radius: 0 0 5px 5px;
  overflow-y: auto;
`;

export const TableListItem = styled.li`
  display: flex;
  transition: 0.5s;
  cursor: pointer;

  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.white.smoke};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.dark};
  }
`;

export const StyledLink = styled(TableListItem).attrs({
  active,
})``;

export const TableListItemSpan = styled.span`
  color: ${({ theme }) => theme.colors.black.normal};
  padding: 0 5px;
  line-height: 30px;
  border-right: solid 1px ${({ theme }) => theme.colors.grey.light};

  &:nth-child(1) {
    width: 50px;
  }
  &:nth-child(2) {
    width: 240px;
  }
  &:nth-child(3) {
    width: 200px;
    border-right: none;
  }
`;
