import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 450px;
  border: solid 1px ${({ theme }) => theme.colors.grey.light};
  border-radius: 5px;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  height: 70px;
  line-height: 70px;
`;

export const LogoImg = styled.img`
  display: block;
  height: 50px;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue.main};
`;

export const LogoTextSpan = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.black.normal};
`;

export const AlertContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 0 ${({ theme }) => theme.spacing.xl}px;
  margin: auto;
  margin-top: 5px;
  height: 50px;
`;

export const AlertContainerSpan = styled.span`
  color: ${({ theme }) => theme.colors.red.main};
  line-height: 50px;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const AlertContainerImg = styled.img`
  height: 50px;
`;
