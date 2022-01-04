import React, { useState } from "react";
import RowTitle from "./RowTitle";
import TitleCard from "../D-07 (title-card)/TitleCard";
import "./lolomo.css";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../modules/slider";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import SlideButton from "./SlideButton";
import SliderPaginator from "./SliderPaginator";

const Slider = () => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const slideWidth = useSelector((state) => state.slider.width);
  const slideRef = useSelector((state) => state.slider.elementRef);
  const { handlePrev, handleNext, containerRef, hasNext, hasPrev } = useSliding(
    slideWidth,
    movies.length
  );

  const [paginatorVisible, setPaginatorVisible] = useState(false);
  const handlePaginationVisable = () => {
    setPaginatorVisible(!paginatorVisible);
  };

  return (
    <>
      <div className="slider-block">
        <RowTitle />
        {paginatorVisible && <SliderPaginator />}
      </div>
      <div
        className="container"
        ref={containerRef}
        onMouseOver={handlePaginationVisable}
        onMouseLeave={handlePaginationVisable}
      >
        <div style={{ display: "flex" }}>
          {movies.map((movie) => (
            <TitleCard movie={movie} key={movies.indexOf(movie)} />
          ))}
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} />}
      </div>
    </>
  );
};

export default Slider;
