import React, { useEffect } from "react";
import {
  PaginationNav,
  PaginationList,
  PaginationListItem,
  StyledLink,
  StyledLinkArrow,
  StyledLinkImg,
} from "./Pagination.css";
import paginationArrowPrevIcon from "images/pagination/pagination-prev-icon3.png";
import paginationArrowNextIcon from "images/pagination/pagination-next-icon3.png";

const Pagination = ({
  items,
  itemsPerPage,
  totalItems,
  currentPage,
  handlePaginate,
  setCurrentPage,
  setRememberPage,
}) => {
  const itemsNumbers = [];
  const decrementPage = currentPage - 1;
  const incrementPage = currentPage + 1;

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemsNumbers.push(i);
  }
  return (
    <>
      {items.length ? (
        <PaginationNav>
          {currentPage === 1 ? null : (
            <StyledLinkArrow
              to={`/dashboard/users`}
              onClick={() => {
                setCurrentPage(decrementPage);
                setRememberPage(decrementPage);
              }}
            >
              <StyledLinkImg
                src={paginationArrowPrevIcon}
                alt="ikona zmiany strony"
              />
            </StyledLinkArrow>
          )}
          <PaginationList>
            {itemsNumbers.map((number, index) => (
              <PaginationListItem key={number}>
                <StyledLink
                  className={`${currentPage === index + 1 ? "active" : null}`}
                  to={`/dashboard/users`}
                  onClick={() => handlePaginate(number)}
                >
                  {number}
                </StyledLink>
              </PaginationListItem>
            ))}
          </PaginationList>
          {currentPage === itemsNumbers.length ? null : (
            <StyledLinkArrow
              to={`/dashboard/users`}
              onClick={() => {
                setCurrentPage(incrementPage);
                setRememberPage(incrementPage);
              }}
            >
              <StyledLinkImg
                src={paginationArrowNextIcon}
                alt="ikona zmiany strony"
              />
            </StyledLinkArrow>
          )}
        </PaginationNav>
      ) : null}
    </>
  );
};

export default Pagination;
