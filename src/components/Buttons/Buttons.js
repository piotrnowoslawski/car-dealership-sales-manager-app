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
      : null};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.blue.main};
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
