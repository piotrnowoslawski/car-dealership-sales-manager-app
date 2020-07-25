import React, { useState, useEffect } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderTitle,
  DropdownHeaderImg,
  DropdownSerach,
  DropdownSerachImg,
  DropdownSerachInput,
  DropdownListContainer,
  DropdownList,
  DropdownListItem,
} from "./Dropdown.css";
import dropdownDownIcon from "images/dropdown/dropdown-down-icon.png";
import dropdownUpIcon from "images/dropdown/dropdown-up-icon.png";
import dropdownSearchIcon from "images/search/search-dropdown-icon3.png";

const Dropdown = ({
  title,
  user,
  items,
  setItems,
  form,
  setForm,
  typesCategory,
  typesCategoryKey,
  dropdownClass,
  searchActive,
}) => {
  const [listOpen, setListOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsToDispaly, setItemsToDispaly] = useState(items);
  const toggleList = () => setListOpen(!listOpen);

  useEffect(() => {
    if (items) {
      setItemsToDispaly(items);
      setIndex(items.findIndex((item) => item.selected === true));
    }
  }, [items]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      const selected = items.map((item) =>
        item.id === user[typesCategory][typesCategoryKey] ||
        item.value === user[typesCategory][typesCategoryKey]
          ? { ...item, selected: true }
          : { ...item, selected: false }
      );
      setItems(selected);
    }
  }, [user]);

  const toggleSelected = (e, id, selected, category, key, value) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, selected: !selected }
          : { ...item, selected: false }
      )
    );
    setForm({
      ...form,
      [category]: {
        ...form[category],
        [key]: id,
      },
    });
  };

  const handleSearch = (e) => {
    let searched = [...items].filter(
      (item) =>
        item.value.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItemsToDispaly(searched);
  };

  return (
    <>
      <DropdownContainer>
        <DropdownHeader
          className={`${listOpen ? "dropdown-open" : null}`}
          onClick={(e) => toggleList()}
        >
          <DropdownHeaderTitle>
            {index >= 0 ? items[index].title : title}
          </DropdownHeaderTitle>
          <DropdownHeaderImg
            src={listOpen ? dropdownUpIcon : dropdownDownIcon}
            alt="ikona rozwijanej listy"
          />
        </DropdownHeader>
        <DropdownListContainer className={listOpen ? dropdownClass : null}>
          {searchActive ? (
            <DropdownSerach>
              <DropdownSerachImg
                src={dropdownSearchIcon}
                alt="ikona wyszukiwania"
              />
              <DropdownSerachInput
                id="search-users"
                placeholder="szukaj"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  handleSearch(e);
                }}
              />
            </DropdownSerach>
          ) : null}
          <DropdownList>
            {items &&
              itemsToDispaly.map((item) => (
                <DropdownListItem
                  className={item.selected ? "dropdown-active" : null}
                  key={item.id}
                  onClick={(e) => {
                    toggleSelected(
                      e,
                      item.id,
                      item.selected,
                      item.category,
                      item.key,
                      item.value
                    );
                    toggleList();
                  }}
                >
                  {item.title}
                </DropdownListItem>
              ))}
          </DropdownList>
        </DropdownListContainer>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
