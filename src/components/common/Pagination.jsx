import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="ul pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a onClick={() => onPageChange(page)} className="page-link">
            {page}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
