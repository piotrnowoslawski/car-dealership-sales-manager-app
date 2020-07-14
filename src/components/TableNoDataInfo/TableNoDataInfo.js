import React from "react";
import { NoDataContainer, NoDataImg, NoDataSpan } from "./TableNoDataInfo.css";
import noDataIcon from "images/search/search-no-data-icon.png";

const TableNoDataInfo = ({ text }) => {
  return (
    <>
      <NoDataContainer>
        <NoDataImg src={noDataIcon} alt="ikona braku infromacji" />
        <NoDataSpan>{text}</NoDataSpan>
      </NoDataContainer>
    </>
  );
};

export default TableNoDataInfo;
