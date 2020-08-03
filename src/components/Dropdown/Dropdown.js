import React, { useState, useEffect, useRef } from "react";
import { useOutsideClose, useEnterKeyOpen } from "hooks";
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
  const containerRef = useRef();
  const itemRef = useRef();
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

  useEnterKeyOpen(containerRef, () => {
    !listOpen && setListOpen(true);
  });

  useOutsideClose(containerRef, () => {
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

  const handleKeyDown = (e) => {
    if (listOpen) {
      if (e.keyCode !== 9 && e.key !== "escape" && e.keyCode !== 13) {
        e.preventDefault();
        let item;
        if (e.keyCode === 40 && index >= 0 && index < items.length - 1) {
          item = items[index + 1];
        } else if (e.keyCode === 38 && index > 0 && index <= items.length - 1) {
          item = items[index - 1];
        } else if (e.keyCode === 40 && index === -1) {
          item = items[0];
        } else return;
        toggleSelected(e, item.id, item.selected, item.category, item.key);
      }
      if (e.keyCode === 13) {
        setListOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <DropdownContainer
        className={`${listOpen ? "dropdown-index" : null}`}
        ref={containerRef}
        tabIndex="0"
      >
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
              itemsToDispaly.map((item, index) => (
                <DropdownListItem
                  ref={itemRef}
                  tabIndex={listOpen ? 0 : -1}
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
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      toggleSelected(
                        e,
                        item.id,
                        item.selected,
                        item.category,
                        item.key
                      );
                      toggleList();
                    }
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
