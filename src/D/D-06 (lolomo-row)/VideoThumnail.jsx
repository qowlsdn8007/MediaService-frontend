import React from "react";
import "./lolomo.css";

export const VideoThumnail = ({ thumbnail }) => {
  const handleOnMouseOver = () => {};

  return (
    <>
      <img
        //className="item"
        src={thumbnail}
        alt="test"
        height="180"
        width="300"
        style={{ borderRadius: 10 }}
      />
    </>
  );
};
