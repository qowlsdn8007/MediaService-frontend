import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { cardHover } from "modules/card";
import { Collapse } from "@mui/material";

const TitleCard = ({ movie, itemsPerPage }) => {
    const isCardHover = useSelector((state) => state.card.cardHover);
    const dispatch = useDispatch();
    const onHover = () => {
        dispatch(cardHover(movie.id));
    };
    console.log(isCardHover, movie.id);
    const content = isCardHover === movie.id;
    return (
        <>
            <Card
                sx={{
                    backgroundColor: "black",
                    maxHeight: 245,
                    maxWidth: 345,
                }}
                className="item"
                onMouseEnter={onHover}
                onMouseLeave={() => dispatch(cardHover(null))}
            >
                <CardMedia component="img" image={movie.thumbnail} />
            </Card>
        </>
    );
};

export default TitleCard;
