import React, { useRef, useState } from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { VideoThumnail } from "../D-06 (lolomo-row)/VideoThumnail";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ProgressBar from "./ProgressBar";

const VideoCard = ({ thumbnail }) => {
  return (
    <Card sx={{ maxWidth: 300 }} className="item">
      <CardActionArea>
        <CardMedia>
          <VideoThumnail thumbnail={thumbnail} />
        </CardMedia>
        <CardContent className="sub-item">
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
