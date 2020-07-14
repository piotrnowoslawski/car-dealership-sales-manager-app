import React from "react";
import {
  PaginationNav,
  PaginationList,
  PaginationListItem,
  StyledLink,
} from "./Pagination.css";

const Pagination = ({ itemsPerPage, totalItems, handlePaginate }) => {
  const itemsNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemsNumbers.push(i);
  }
  return (
    <>
      <PaginationNav>
        <PaginationList>
          {itemsNumbers.map((number) => (
            <PaginationListItem key={number}>
              <StyledLink
                to={`/dashboard/users/page/:${number}`}
                onClick={() => handlePaginate(number)}
              >
                {number}
              </StyledLink>
            </PaginationListItem>
          ))}
        </PaginationList>
      </PaginationNav>
    </>
  );
};

export default Pagination;
