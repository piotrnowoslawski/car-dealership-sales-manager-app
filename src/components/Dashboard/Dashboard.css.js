import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  margin-top: 50px;
  display: flex;
  overflow-x: scroll;
`;

export const PathNameInfo = styled.h1 `
  font-size: 2rem;
  margin-bottom: 20px;

  &:first-letter {
    text-transform: capitalize;
  }
`;