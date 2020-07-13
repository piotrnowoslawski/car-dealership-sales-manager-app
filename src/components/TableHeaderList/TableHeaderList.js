import React from "react";
import { TableList, TableListItem } from "./TableHeaderList.css";

const TableHeaderList = ({ items }) => {
  return (
    <>
      <TableList>
        {items.map((item) => (
          <TableListItem key={item.id}>{item.title}</TableListItem>
        ))}
      </TableList>
    </>
  );
};

export default TableHeaderList;
