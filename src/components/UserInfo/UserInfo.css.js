import styled from "styled-components";

export const UserViewContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const UserViewHeader = styled.h2`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
  color: ${({ theme }) => theme.colors.white.normal};
  line-height: 40px;
  padding: 0 20px;
`;

export const UserViewHeaderImg = styled.img`
  height: 36px;
  margin-right: 5px;
  margin-top: 2px;
`;

export const UserViewHeaderName = styled.span`
  font-size: 1.4rem;
`;

export const UserViewHeaderJobPosition = styled.span`
  font-size: 1.4rem;
  margin: 0 0 0 auto;
`;

export const UserViewContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SectionWrapper = styled.div`
  margin-top: 20px;
  width: 49%;
`;

export const Section = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.h3`
  height: 40px;
  line-height: 40px;
  background: ${({ theme }) => theme.colors.blue.main};
  color: ${({ theme }) => theme.colors.white.normal};
  border-radius: 5px 5px 0 0;
  padding: 0 15px;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const DataContainer = styled.div`
  min-height: 220px;
  border: solid 1px ${({ theme }) => theme.colors.grey.dark};
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.white.smoke};
`;

export const DataSection = styled.div`
  diplay: flex;
  margin: 5px 0;
`;

export const DataName = styled.span`
  color: ${({ theme }) => theme.colors.grey.fontDark};
  font-size: 1.2rem;
  margin-right: 5px;
`;

export const DataContent = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;
