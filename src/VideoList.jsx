import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material";
import { VideoThumnail } from "./VideoThumnail";

const VideoList = () => {
  return (
    <Grid container>
      <Grid item sx={{ paddingRight: 1 }}>
        <VideoThumnail />
      </Grid>
      <Grid item sx={{ paddingRight: 1 }}>
        <VideoThumnail />
      </Grid>
    </Grid>
  );
};

export default VideoList;
