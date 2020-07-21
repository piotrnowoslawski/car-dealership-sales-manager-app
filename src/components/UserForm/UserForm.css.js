import styled from "styled-components";

export const UserFormHeader = styled.h2`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.main};
  border-radius: 5px 5px 0px 0px;
  color: ${({ theme }) => theme.colors.white.normal};
  line-height: 40px;
  padding-left: 20px;
  margin: 20px 0;
`;

export const UserFormHeaderImg = styled.img`
  height: 36px;
  margin-right: 5px;
  margin-top: 2px;
`;

export const UserFormHeaderName = styled.span`
  font-size: 1.4rem;
`;

export const UserFormContainer = styled.form`
  width: 100%;
  margin-top: 10px;
`;

export const UserFormInputsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SectionWrapper = styled.div`
  width: 49%;
  margin-bottom: 10px;
`;

export const SectionWrapperHeader = styled.h3`
  height: 40px;
  line-height: 40px;
  background: ${({ theme }) => theme.colors.blue.main};
  color: ${({ theme }) => theme.colors.white.normal};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 15px;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const InputField = styled.div`
  width: 100%;
  padding: 0 25px;
  margin: 10px 0;
`;

export const InputLabel = styled.label`
  display: block;
  margin-right: 10px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.blue.main};
`;

export const Input = styled.input`
  width: 60%;
  height: 40px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.colors.blue.main};
  border-radius: 3px;
  padding: 0 15px;

  &::placeholder {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey.placeholderDark};
  }
`;

export const InputCheckImg = styled.img`
  margin-left: 10px;
  margin-top: 10px;
  height: 30px;
`;

export const WrapperForCheck = styled.div`
  display: flex;
`;
