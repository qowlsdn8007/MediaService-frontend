<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
import RowTitle from "./RowTitle";
import TitleCard from "../D-07 (title-card)/TitleCard";
import "./lolomo.css";
import { useSelector, useDispatch } from "react-redux";
import { select, setPaginatorTotalPage } from "../../modules/slider";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
<<<<<<< HEAD
import SlideButton from "./SlideButton";
=======
import { SlideButtonPrev, SlideButtonNext } from "./SlideButton";
>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
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
<<<<<<< HEAD

=======
>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
  const [paginatorVisible, setPaginatorVisible] = useState(false);
  const handlePaginationVisable = () => {
    setPaginatorVisible(!paginatorVisible);
  };

<<<<<<< HEAD
=======
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

>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
  return (
    <>
      <div className="slider-block--header">
        <RowTitle />
<<<<<<< HEAD
        {paginatorVisible && <SliderPaginator />}
=======
        {paginatorVisible && (
          <SliderPaginator props={{ totalPage: sliderTotalPage }} />
        )}
>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
      </div>

      <div
        className="container"
        ref={containerRef}
        onMouseOver={handlePaginationVisable}
        onMouseLeave={handlePaginationVisable}
      >
<<<<<<< HEAD
        <div style={{ display: "flex" }}>
=======
        <div className="slider-items" style={style}>
>>>>>>> eda5185336ede31fad92b4d7b1dcdfcc861e223d
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
