import styled from "styled-components";

export const LoginUserContainer = styled.div`
  display: block;
  display: flex;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 20px;
  height: 30px;
  line-height: 30px;
  margin: 0 15px 0 auto;
`;

export const LoginUserTitle = styled.span`
  margin-right: 3px;
`;

export const LoginUsername = styled.span`
  padding: 0 2px;
  border-radius: 3px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue.main};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white.normal};
    background: ${({ theme }) => theme.colors.blue.main};
  }
`;
