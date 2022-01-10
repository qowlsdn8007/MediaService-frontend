import React from "react";
import "./lolomo.css";

const SliderPaginator = ({ props }) => {
  const { totalPage, currentPage } = props;
  const pageList = Array(totalPage).fill(false);
  pageList[currentPage - 1] = true;

  return (
    <div className="slider-pagination">
      {pageList.map((isActive) =>
        isActive ? (
          <span className="slider-pagination-page slider-pagination-page--active"></span>
        ) : (
          <span className="slider-pagination-page"></span>
        )
      )}
    </div>
  );
};

export default SliderPaginator;
