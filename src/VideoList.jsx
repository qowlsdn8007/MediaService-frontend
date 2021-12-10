import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material";
import { VideoThumnail } from "./VideoThumnail";
import VideoTagName from "./VideoTagName";
import { DataArray } from "@mui/icons-material";

const VideoList = ({ props }) => {
  return (
    <>
      <VideoTagName />
      <Grid container>
        {props.map((data) => {
          console.log(data.thumbnail);
          <Grid item sx={{ paddingRight: 1 }}>
            <VideoThumnail props={data.thumbnail} />
          </Grid>;
        })}
      </Grid>
    </>
  );
};

export default VideoList;
