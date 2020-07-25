import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 60%;
  margin-top: 5px;
  border: solid 1px ${({ theme }) => theme.colors.blue.main};
  border-radius: 3px 3px 3px 3px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3px 3px 3px 3px;
  height: 38px;
  padding: 0 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.white.smoke};
  }
`;

export const DropdownHeaderTitle = styled.span`
  line-height: 38px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey.placeholderDark};
`;

export const DropdownHeaderImg = styled.img`
  height: 30px;
  margin-top: 4px;
`;

export const DropdownListContainer = styled.div`
  overflow: hidden;
  height: 0px;
  padding: 0 10px;
  border-radius: 3px 3px 3px 3px;
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;

  &.dropdown-gender {
    height: 90px;
  }

  &.dropdown-job {
    height: 170px;
  }

  &.dropdown-countries {
    height: 200px;
  }
`;

export const DropdownSerach = styled.div`
  display: flex;
  margin: 5px 0 10px 0;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white.smoke};
`;

export const DropdownSerachImg = styled.img`
  height: 26px;
  margin: 0 5px;
  margin-top: 2px;
`;

export const DropdownSerachInput = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 3px 3px 3px 3px;
  padding: 0 5px;
  background: ${({ theme }) => theme.colors.white.smoke};
`;

export const DropdownList = styled.ul`
  height: 100%;
  overflow: auto;
`;

export const DropdownListItem = styled.li`
  height: 30px;
  margin: 5px 0;
  line-height: 30px;
  padding: 0 10px;
  font-weight: 600;
  border-radius: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
