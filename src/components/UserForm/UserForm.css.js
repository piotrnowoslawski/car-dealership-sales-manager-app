import styled from "styled-components";

export const UserFormContainer = styled.form`
  margin-top: 10px;
  width: 50%;
`;

export const SectionWrapper = styled.div``;

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

  &.dropdown-check {
    margin-top: 30px;
  }
`;

export const WrapperForCheck = styled.div`
  display: flex;
`;
