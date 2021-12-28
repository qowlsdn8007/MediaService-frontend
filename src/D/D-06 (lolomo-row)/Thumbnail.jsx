import React from "react";
import "./lolomo.css";

export const Thumbnail = ({ thumbnail, onMouseOverCapture }) => {
  return (
    <>
      <img
        //className="item"
        src={thumbnail}
        alt="test"
        height="180"
        width="300"
        onMouseOverCapture={onMouseOverCapture}
      />
    </>
  );
};
