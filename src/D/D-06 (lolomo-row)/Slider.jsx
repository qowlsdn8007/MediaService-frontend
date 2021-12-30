import React, { useEffect, useState } from "react";
import RowTitle from "./RowTitle";
import TitleCard from "../D-07 (title-card)/TitleCard";
import "./lolomo.css";
import { useSelector, useDispatch } from "react-redux";
import { select, setPaginatorTotalPage } from "../../modules/slider";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import { SlideButtonPrev, SlideButtonNext } from "./SlideButton";
import SliderPaginator from "./SliderPaginator";

const Slider = () => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const slideWidth = useSelector((state) => state.slider.width);
  const slideRef = useSelector((state) => state.slider.elementRef);
  const sliderTotalPage = useSelector((state) => state.slider.sliderTotalPage);

  const { handlePrev, handleNext, containerRef, hasNext, hasPrev } = useSliding(
    slideWidth,
    movies.length
  );
  const [paginatorVisible, setPaginatorVisible] = useState(false);
  const handlePaginationVisable = () => {
    setPaginatorVisible(!paginatorVisible);
  };

  dispatch(setPaginatorTotalPage(movies.length));

  return (
    <>
      <div className="slider-block--header">
        <RowTitle />
        {paginatorVisible && (
          <SliderPaginator props={{ totalPage: sliderTotalPage }} />
        )}
      </div>
      <div
        className="container"
        ref={containerRef}
        onMouseOver={handlePaginationVisable}
        onMouseLeave={handlePaginationVisable}
      >
        {movies.map((movie) => (
          <TitleCard movie={movie} key={movies.indexOf(movie)} />
        ))}
        <SlideButtonPrev onClick={handlePrev} />
        <SlideButtonNext onClick={handlePrev} />
      </div>
    </>
  );
};

export default Slider;
