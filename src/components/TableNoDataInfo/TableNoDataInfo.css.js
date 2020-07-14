import styled from "styled-components";

export const NoDataContainer = styled.div`
  display: flex;
  padding: 0 5px;
  border-left: solid 1px ${({ theme }) => theme.colors.grey.light};
  border-right: solid 1px ${({ theme }) => theme.colors.grey.light};
`;

export const NoDataImg = styled.img`
  height: 30px;
  margin-right: 5px;
`;

export const NoDataSpan = styled.span`
  line-height: 30px;
  font-weight: 600;
`;
