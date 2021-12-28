import React from "react";
import "./lolomo.css";

const SliderPaginator = (movieNumber) => {
  return (
    <div className="slider-pagination">
      <span className="slider-pagination-page slider-pagination-page--active"></span>
      <span className="slider-pagination-page"></span>
      <span className="slider-pagination-page"></span>
    </div>
  );
};

export default SliderPaginator;
