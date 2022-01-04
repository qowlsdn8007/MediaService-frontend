import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./lolomo.css";

<<<<<<< HEAD
const SliderPaginator = () => {
=======
const SliderPaginator = ({ props }) => {
  const pageList = Array(props.totalPage).fill(false);
  const currentSlidePage = useSelector(
    (state) => state.slider.currentSlidePage
  );
  pageList[currentSlidePage] = true;

>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
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
