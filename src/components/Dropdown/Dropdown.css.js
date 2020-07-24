import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 60%;
  margin: 5px 0;
  border: solid 1px ${({ theme }) => theme.colors.blue.main};
  border-radius: 3px 3px 3px 3px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3px 3px 3px 3px;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.white.smoke};
  }
`;

export const DropdownHeaderTitle = styled.span`
  line-height: 40px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey.placeholderDark};
`;

export const DropdownHeaderImg = styled.img`
  height: 32px;
  margin-top: 4px;
`;

export const DropdownList = styled.ul`
  overflow: auto;
  height: 0px;
  padding: 0 10px;
  border-radius: 3px 3px 3px 3px;
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;

  &.dropdown-gender {
    height: 80px;
  }

  &.dropdown-job {
    height: 160px;
  }
`;

export const DropdownListItem = styled.li`
  height: 30px;
  margin: 5px 0;
  line-height: 30px;
  padding: 0 10px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.5s;

  &.dropdown-active {
    color: ${({ theme }) => theme.colors.white.normal};
    background: ${({ theme }) => theme.colors.blue.main};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey.light};
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
