import React from "react";
import { usePagination, DOTS } from "./usePagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className={`pagination ${className}`}>
      <button className={"pagination__btn"} onClick={onPrevious}>
        <MdKeyboardArrowLeft className="icon" />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <span className="pagination__text">&#8230;</span>;
        }

        return (
          <button
            className={`pagination__btn ${
              pageNumber === currentPage ? "pagination__btn--active" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button className={"pagination__btn"} onClick={onNext}>
        <MdKeyboardArrowRight className="icon" />
      </button>
    </div>
  );
};

export default Pagination;
