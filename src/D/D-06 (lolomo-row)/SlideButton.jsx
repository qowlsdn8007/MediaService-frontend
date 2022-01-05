import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./lolomo.css";

export const SlideButtonPrev = ({ onClick }) => {
  return (
    <button
      className="slider-nav-button slider-nav-button--prev"
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </button>
  );
};

export const SlideButtonNext = ({ onClick }) => {
  return (
    <button
      className="slider-nav-button slider-nav-button--next"
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </button>
  );
};
