import React, { useState } from "react";
import {
  SerachForm,
  SearchImg,
  SearchLabel,
  SearchInputContainer,
  SerachInput,
} from "./Search.css";
import searchUserIcon from "images/search/search-user-icon.png";

const Search = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SerachForm>
        <SearchLabel htmlFor="search">Szybkie wyszukiwanie:</SearchLabel>
        <SearchInputContainer>
          <SerachInput
            id="search"
            placeholder="wprowadź ..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch(e);
            }}
          />
          <SearchImg src={searchUserIcon} alt="ikona wyszukiwania" />
        </SearchInputContainer>
      </SerachForm>
    </>
  );
};

export default Search;
