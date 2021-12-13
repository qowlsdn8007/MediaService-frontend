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
      <Grid container>
        {props.map((data) => (
          <Grid item sx={{ paddingRight: 1 }}>
            <VideoThumnail thumbnail={data.thumbnail} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoList;
