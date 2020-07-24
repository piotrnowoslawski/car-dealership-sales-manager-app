import React, { useState, useEffect } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderTitle,
  DropdownHeaderImg,
  DropdownList,
  DropdownListItem,
} from "./Dropdown.css";
import dropdownDownIcon from "images/dropdown/dropdown-down-icon.png";
import dropdownUpIcon from "images/dropdown/dropdown-up-icon.png";

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
}) => {
  const [listOpen, setListOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const toggleList = () => setListOpen(!listOpen);

  useEffect(() => {
    if (items) {
      setIndex(items.findIndex((item) => item.selected === true));
    }
  }, [items]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setItems(
        items.map((item) =>
          item.id === user[typesCategory][typesCategoryKey] ||
          item.value === user[typesCategory][typesCategoryKey]
            ? { ...item, selected: true }
            : { ...item, selected: false }
        )
      );
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
        <DropdownList className={listOpen ? dropdownClass : null}>
          {items &&
            items.map((item) => (
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
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
