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

  const [style, setStyle] = useState({
    transition: "transform 300ms ease 100ms",
  });
  const [currentX, setCurrentX] = useState(0);
  const itemsPerPage = 6;
  const handleSlideMove = (type) => {
    if (type === "next") {
      setCurrentX(currentX + 1);
      console.log(currentX);
      Math.ceil(movies.length / itemsPerPage) > currentX &&
        setStyle({ ...style, transform: `translateX(${currentX * -96}%)` });
    } else {
      // "prev"
      setCurrentX(currentX - 1);
      console.log(currentX);
      0 < currentX &&
        setStyle({ ...style, transform: `translateX(${currentX * -96}%)` });
    }
    console.log(style);
  };

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
        <div className="slider-items" style={style}>
          {movies.map((movie) => (
            <TitleCard
              movie={movie}
              itemsPerPage={6}
              key={movies.indexOf(movie)}
            />
          ))}
        </div>
        <SlideButtonPrev onClick={() => handleSlideMove("prev")} />
        <SlideButtonNext onClick={() => handleSlideMove("next")} />
      </div>
    </>
  );
};

export default Slider;
