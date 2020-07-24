import React from "react";
import { TableList, TableListItem } from "./TableHeaderList.css";

const TableHeaderList = ({ items, styleClass }) => {
  return (
    <>
      <TableList className={styleClass}>
        {items.map((item) => (
          <TableListItem style key={item.id}>
            {item.title}
          </TableListItem>
        ))}
      </TableList>
    </>
  );
};

export default TableHeaderList;
