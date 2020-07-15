import styled from "styled-components";

export const LogoutButton = styled.button`
  display: flex;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 20px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  background: transparent;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grey.light};
  }
`;

export const LogoutButtonImg = styled.img`
  height: 30px;
  margin-right: 5px;
`;

export const LogoutButtonText = styled.span`
  line-height: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.main};
`;
