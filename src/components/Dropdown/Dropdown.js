import React, { useState } from "react";
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

const Dropdown = ({ title, items, toggleSelected, dropdownClass }) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => setListOpen(!listOpen);

  return (
    <>
      <DropdownContainer>
        <DropdownHeader onClick={(e) => toggleList()}>
          <DropdownHeaderTitle>{title}</DropdownHeaderTitle>
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
