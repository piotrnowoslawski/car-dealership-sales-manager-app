import React, { useState, useEffect, useRef } from "react";
import useOutsideClose from "hooks";
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
  const ref = useRef();
  const [listOpen, setListOpen] = useState(false);
  const [index, setIndex] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [itemsToDispaly, setItemsToDispaly] = useState(items);

  useEffect(() => {
    setIndex(items.findIndex((item) => item.selected === true));
  }, [itemsToDispaly]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      handleSelecting(items);
    }
  }, [user]);

  useOutsideClose(ref, () => {
    if (listOpen) setListOpen(false);
  });

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const handleSelecting = (items) => {
    let selecting = items.map((item) =>
      item.id === user[typesCategory][typesCategoryKey] ||
      item.value === user[typesCategory][typesCategoryKey]
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    setItems(selecting);
    setItemsToDispaly(selecting);
  };

  const toggleSelected = (e, id, selected, category, key) => {
    setForm({
      ...form,
      [category]: {
        ...form[category],
        [key]: !selected ? id : false,
      },
    });
    let newSelecting = items.map((item) =>
      item.id === id
        ? { ...item, selected: !selected }
        : { ...item, selected: false }
    );
    setItems(newSelecting);
    setItemsToDispaly(newSelecting);
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
      <DropdownContainer className={`${listOpen ? "dropdown-index" : null}`}>
        <DropdownHeader
          ref={ref}
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
                      item.key
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
