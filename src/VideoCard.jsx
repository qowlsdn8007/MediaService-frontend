import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Container,
  LinearProgress,
} from "@mui/material";
import { VideoThumnail } from "./VideoThumnail";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
const VideoCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia>
          <VideoThumnail />
        </CardMedia>
        <CardContent>
          <Container sx={{ display: "flex" }}>
            <PlayCircleOutlineIcon />
            <AddCircleIcon />
            <ThumbUpAltIcon />
            <ThumbDownAltIcon />
            <ExpandCircleDownIcon sx={{ marginLeft: 15 }} />
          </Container>
          <Typography>asdfasdf</Typography>
          <LinearProgress></LinearProgress>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
