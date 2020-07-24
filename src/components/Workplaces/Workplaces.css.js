import styled from "styled-components";

export const WorkplacesContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const WorkplacesHeader = styled.h2`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
  color: ${({ theme }) => theme.colors.white.normal};
  line-height: 40px;
  padding-left: 20px;
`;

export const WorkplacesHeaderSpan = styled.span`
  font-size: 1.4rem;
`;

export const WorkplacesManagementWrapper = styled.div`
  display: flex;
`;
