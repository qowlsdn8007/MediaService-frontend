import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { Thumbnail } from "../D-06 (lolomo-row)/Thumbnail";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ProgressBar from "./ProgressBar";
import "../D-06 (lolomo-row)/lolomo.css";

const TitleCard = ({ movie, itemsPerPage }) => {
  return (
    <Card
      sx={{ backgroundColor: "black", flex: `0 0 100 / ${itemsPerPage} ` }}
      className="item"
    >
      <CardActionArea>
        <CardMedia>
          <Thumbnail thumbnail={movie.thumbnail} />
        </CardMedia>
        <CardContent className="sub-item">
          <Container sx={{ display: "flex", backgroundColor: "bal" }}>
            <PlayCircleOutlineIcon sx={{ color: "white" }} />
            <AddCircleIcon sx={{ color: "white" }} />
            <ThumbUpAltIcon sx={{ color: "white" }} />
            <ThumbDownAltIcon sx={{ color: "white" }} />
            <ExpandCircleDownIcon sx={{ color: "white", marginLeft: 15 }} />
          </Container>
          <Typography>{movie.name}</Typography>
          <Container sx={{ display: "flex" }}>
            <ProgressBar />
            <Typography sx={{ float: "right", color: "white" }}>
              시청 중 시간
            </Typography>
          </Container>
          {movie.genre.map((tag) => (
            <Typography sx={{ float: "left", color: "white" }} key={tag}>
              {tag}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TitleCard;