import React, { useEffect, useState } from "react";
import RowTitle from "./RowTitle";
import TitleCard from "../D-07 (title-card)/TitleCard";
import "./lolomo.css";
import { useSelector } from "react-redux";
import { SlideButtonPrev, SlideButtonNext } from "./SlideButton";
import SliderPaginator from "./SliderPaginator";

const Slider = () => {
  const movies = useSelector((state) => state.movie);
  const [paginatorVisible, setPaginatorVisible] = useState(false);
  const handlePaginationVisable = () => {
    setPaginatorVisible(!paginatorVisible);
  };

  const [style, setStyle] = useState({
    transition: "transform 300ms ease 100ms",
    transform: "translateX(0%)",
  });
  //  const for paging
  const firstPage = 1;
  const itemsPerPage = 6;
  const totalPage = Math.ceil(movies.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(firstPage);

  //  function for
  const handleSlideNext = () => {
    currentPage < totalPage && setCurrentPage((x) => x + 1);
  };

  const handleSlidePrev = () => {
    currentPage > firstPage && setCurrentPage((x) => x - 1);
  };

  // rendering when event accurred
  useEffect(() => {
    const translateRatio = (currentPage - 1) * -96;
    setStyle((prevStyle) => ({
      ...prevStyle,
      transform: `translateX(${translateRatio}%)`,
    }));
  }, [currentPage]);

  return (
    <>
      <div className="slider-block--header">
        <RowTitle />
        {paginatorVisible && (
          <SliderPaginator props={{ totalPage, currentPage }} />
        )}
      </div>

      <div
        className="container"
        onMouseOver={handlePaginationVisable}
        onMouseLeave={handlePaginationVisable}
      >
        <div className="slider-items" style={style}>
          {movies.map((movie) => (
            <TitleCard
              movie={movie}
              itemsPerPage={itemsPerPage}
              key={movies.indexOf(movie)}
            />
          ))}
        </div>
        <SlideButtonPrev onClick={() => handleSlidePrev()} />
        <SlideButtonNext onClick={() => handleSlideNext()} />
      </div>
    </>
  );
};

export default Slider;
