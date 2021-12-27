import React from "react";
import RowTitle from "./RowTitle";
import TitleCard from "./TitleCard";
import "./lolomo.css";
import { Card } from "@mui/material";

const Slider = ({ props, onSelectSlide }) => {
  return (
    <div className="container">
      <RowTitle />
      <div style={{ display: "flex" }}>
        {props.map((data) => (
          <TitleCard thumbnail={data.thumbnail} onClick={onSelectSlide} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
