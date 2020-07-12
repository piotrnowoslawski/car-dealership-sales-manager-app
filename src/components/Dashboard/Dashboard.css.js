import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const PathNameInfo = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  &:first-letter {
    text-transform: capitalize;
  }
`;
