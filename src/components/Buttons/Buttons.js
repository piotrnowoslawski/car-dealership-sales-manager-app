import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background: ${(props) =>
    props.green
      ? ({ theme }) => theme.colors.green.main
      : props.red
      ? ({ theme }) => theme.colors.red.main
      : props.black
      ? ({ theme }) => theme.colors.black.normal
      : props.blue
      ? ({ theme }) => theme.colors.blue.main
      : null};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.blue
        ? ({ theme }) => theme.colors.black.normal
        : ({ theme }) => theme.colors.blue.main};
  }

  &.login__button {
    margin: 20px 0 0 auto;
  }
`;

export const ButtonImg = styled.img`
  height: 32px;
  margin: 4px 5px 0 10px;
`;

export const ButtonText = styled.span`
  line-height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.white.normal};
`;

export const ButtonTransparent = styled.button`
  background: transparent;
  height: 30px;
  padding: 0px 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.blue.main}};
  margin-right: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.black.normal};
    background: ${({ theme }) => theme.colors.grey.light};
  }
`;
