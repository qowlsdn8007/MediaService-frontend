import React from "react";
import RowTitle from "./RowTitle";
import TitleCard from "../D-07 (title-card)/TitleCard";
import "./lolomo.css";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../modules/slider";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import SlideButton from "./SlideButton";

const Slider = () => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const slideWidth = useSelector((state) => state.slider.width);
  const slideRef = useSelector((state) => state.slider.elementRef);
  const { handlePrev, handleNext, containerRef, hasNext, hasPrev } = useSliding(
    slideWidth,
    movies.length
  );

  return (
    <>
      <RowTitle />
      <div className="container" ref={containerRef}>
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
