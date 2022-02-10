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
import { useDispatch, useSelector } from "react-redux";
import { cardHover } from "modules/card";

const TitleCard = ({ movie, itemsPerPage }) => {
    const isCardHover = useSelector((state) => state.card.cardHover);
    const dispatch = useDispatch();
    const onHover = () => {
        dispatch(cardHover(movie.id));
    };
    console.log(isCardHover, movie.id);
    return (
        <Card
            sx={{
                backgroundColor: "black",
            }}
            className="item"
            onMouseEnter={onHover}
            onMouseLeave={() => dispatch(cardHover(null))}
        >
            <CardActionArea>
                <CardMedia>
                    <Thumbnail thumbnail={movie.thumbnail} />
                </CardMedia>
                {/* {isCardHover === movie.id && ( */}
                <CardContent
                    style={{ display: "none" }}
                    className={
                        isCardHover === movie.id ? "sub-item-hover" : "sub-item"
                    }
                >
                    <Container sx={{ display: "flex", backgroundColor: "bal" }}>
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
                {/* )} */}
            </CardActionArea>
        </Card>
    );
};

export default TitleCard;
