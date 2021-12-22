import React from "react";
import RowTitle from "./RowTitle";
import TitleCard from "./TitleCard";
import "./lolomo.css";
import { Card } from "@mui/material";

const Slider = ({ props }) => {
  console.log(props);
  return (
    <div className="container">
      <RowTitle />
      <div style={{ display: "flex" }}>
        {props.map((data) => (
          <TitleCard thumbnail={data.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
