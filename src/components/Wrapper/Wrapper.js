import styled from "styled-components";

const Wrapper = styled.div `
  width: 100%;
  max-width: 720px;
  padding: 30px ${({theme}) => theme.spacing.xl}px;
`;

export default Wrapper;