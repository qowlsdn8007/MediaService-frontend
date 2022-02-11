import React, { useState } from "react";
import {
    CardActionArea,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Container,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ProgressBar from "./ProgressBar";
import "../D-06 (lolomo-row)/lolomo.css";
import { cardHover } from "modules/card";
import { Collapse } from "@mui/material";

const TitleCard = ({ movie, itemsPerPage }) => {
    const [hover, SetHover] = useState(false);
    return (
        <Card
            sx={{
                backgroundColor: "black",
                maxWidth: 345,
            }}
            className="item"
            onMouseOver={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfMjc4/MDAxNTE2NTE4MTkyOTMw.vbnx7x3fXf5GHgHtypm1MBNumENwtPCjKWeOIVMZilgg.81Q9L1g2On7kRinpdROLkOgHFisLrdxJCuXZKxmobnsg.JPEG.milae87/%EB%B9%BC%EC%89%90%ED%8C%8C%EC%8A%A4%ED%83%80-13.JPG?type=w800"
                    height="194"
                />
                {hover && (
                    <CardContent>
                        <Container
                            sx={{ display: "flex", backgroundColor: "bal" }}
                        >
                            <PlayCircleOutlineIcon sx={{ color: "white" }} />
                            <AddCircleIcon sx={{ color: "white" }} />
                            <ThumbUpAltIcon sx={{ color: "white" }} />
                            <ThumbDownAltIcon sx={{ color: "white" }} />
                            <ExpandCircleDownIcon
                                sx={{ color: "white", marginLeft: 15 }}
                            />
                        </Container>
                        <Typography>{movie.name}</Typography>
                        <Container sx={{ display: "flex" }}>
                            <ProgressBar />
                            <Typography sx={{ float: "right", color: "white" }}>
                                시청 중 시간
                            </Typography>
                        </Container>
                        {movie.genre.map((tag) => (
                            <Typography
                                sx={{ float: "left", color: "white" }}
                                key={tag}
                            >
                                {tag}
                            </Typography>
                        ))}
                    </CardContent>
                )}
            </CardActionArea>
        </Card>
    );
};

export default TitleCard;
