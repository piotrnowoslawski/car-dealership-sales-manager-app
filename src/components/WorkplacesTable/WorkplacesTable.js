import React from "react";
import {
  WorkplacesTableContainer,
  WorkplacesTableHeader,
  TableList,
  TableListItem,
  TableListItemSpan,
} from "./WorkplacesTable.css";
import { TableHeaderList, TableNoDataInfo } from "components";

const WorkplacesTable = ({ workplaces, pending }) => {
  return (
    <>
      <WorkplacesTableContainer>
        <WorkplacesTableHeader>
          <TableHeaderList
            items={[
              { id: 1, title: "Nr" },
              { id: 2, title: "Nazwa" },
              { id: 3, title: "Lokalizcja" },
            ]}
            styleClass={"workplacess-table-style"}
          />
        </WorkplacesTableHeader>
        <TableList>
          {pending ? (
            <TableNoDataInfo text={"Wczytywanie danych"} />
          ) : (
            workplaces.map((item, index) => (
              <TableListItem key={item._id}>
                <TableListItemSpan>{index + 1}</TableListItemSpan>
                <TableListItemSpan>{item.workplaceData.name}</TableListItemSpan>
                <TableListItemSpan>{`${item.address.street} ${item.address.city}`}</TableListItemSpan>
              </TableListItem>
            ))
          )}
        </TableList>
      </WorkplacesTableContainer>
    </>
  );
};

export default WorkplacesTable;
