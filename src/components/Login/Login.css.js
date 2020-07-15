import styled from "styled-components";

export const LoginForm = styled.form`
  border-radius: 5px;
  width: 90%;
  margin: auto;
  padding: ${({ theme }) => theme.spacing.xl}px;
  background: ${({ theme }) => theme.colors.white.smoke};
`;

export const LoginInputField = styled.div`
  margin-bottom: 10px;
`;

export const LoginInputLabel = styled.label`
  display: block;
  line-height: 40px;
  margin-right: 10px;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.blue.main};
`;

export const LoginInput = styled.input`
  height: 35px;
  width: 300px;
  padding: 0 10px;
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.blue.main};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.dark};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.dark};
  }
`;
