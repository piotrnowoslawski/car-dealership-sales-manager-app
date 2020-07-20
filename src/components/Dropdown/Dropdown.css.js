import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 150px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  height: 30px;
  border: solid 1px ${({ theme }) => theme.colors.black.normal};
  border-bottom: none;
  border-radius: 3px 3px 0px 0px;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.white.smoke};
  }
`;

export const DropdownHeaderTitle = styled.span`
  line-height: 30px;
  font-size: 1rem;
  margin-right: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.main};
`;

export const DropdownHeaderImg = styled.img`
  height: 24px;
  margin-top: 3px;
`;

export const DropdownList = styled.ul`
  overflow: hidden;
  height: 0;
  padding: 0 10px;
  border: solid 1px ${({ theme }) => theme.colors.black.normal};
  border-top: none;
  border-radius: 0px 0px 3px 3px;
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;

  &.dropdown-gender {
    height: 50px;
  }
`;

export const DropdownListItem = styled.li`
  padding: 0 5px;
  cursor: pointer;
  transition: 0.5s;

  &.dropdown-active {
    color: ${({ theme }) => theme.colors.white.normal};
    background: ${({ theme }) => theme.colors.blue.main};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.light};
    border-radius: 3px;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
