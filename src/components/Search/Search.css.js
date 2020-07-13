import styled from "styled-components";

export const SerachForm = styled.form`
  display: flex;
  margin: 0 0 0 auto;
  height: 100%;
`;

export const SearchImg = styled.img`
  height: 30px;
  margin: 4px 5px 6px 5px;
`;

export const SearchLabel = styled.label`
  line-height: 40px;
  margin-right: 10px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  height: 40px;
  border: solid 1px ${({ theme }) => theme.colors.black.normal};
  border-radius: 5px;
`;

export const SerachInput = styled.input`
  width: 200px;
  border-radius: 5px;
  padding: 0 10px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.blue.main};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
