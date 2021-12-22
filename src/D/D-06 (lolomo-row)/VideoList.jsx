import React from "react";
import { Grid } from "@mui/material";
import { VideoThumnail } from "./VideoThumnail";
import RowTitle from "./RowTitle";
import VideoCard from "../D-07 (title-card)/VideoCard";
import "./lolomo.css";

const VideoList = ({ props }) => {
  console.log(props);
  return (
    <div className="container">
      <RowTitle />
      <div style={{ display: "flex" }}>
        {props.map((data) => (
          <VideoCard thumbnail={data.thumbnail} sx={{ paddingRight: 1 }} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
