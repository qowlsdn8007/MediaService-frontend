import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SlideButton = ({ onClick }) => {
  return (
    <div>
      <ArrowBackIosNewIcon onClick={onClick} />
      <ArrowForwardIosIcon />
    </div>
  );
};

export default SlideButton;
