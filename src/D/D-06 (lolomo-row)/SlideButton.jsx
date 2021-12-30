import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./lolomo.css";

export const SlideButtonPrev = ({ onClick }) => {
  return (
    <button className="slider-nav-button slider-nav-button--prev">
      <ArrowBackIosNewIcon onClick={onClick} />
    </button>
  );
};

export const SlideButtonNext = ({ onClick }) => {
  return (
    <button className="slider-nav-button slider-nav-button--next">
      <ArrowForwardIosIcon onClick={onClick} />
    </button>
  );
};
