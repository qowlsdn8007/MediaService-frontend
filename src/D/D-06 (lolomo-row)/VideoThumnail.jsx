import React from "react";
import "./lolomo.css";

export const VideoThumnail = ({ thumbnail }) => {
  return (
    <>
      <img
        //className="item"
        src={thumbnail}
        alt="test"
        height="180"
        width="300"
      />
    </>
  );
};
