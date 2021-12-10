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
import ProgressBar from "./ProgressBar";
const VideoCard = () => {
  const dummyValue = 60;

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
          <Typography>시즌과 제목</Typography>
          <Container>
            <ProgressBar />
            <Typography sx={{ float: "right" }}>시청 중 시간</Typography>
          </Container>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
