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
import { setMovieData, setPreviewModalOpen } from "modules/uiControl";

const TitleCard = ({ movie, itemsPerPage }) => {
    const isCardHover = useSelector((state) => state.card.cardHover);
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.uiControl.reviewModalOpen);
    const handleModalOpen = () => {
        dispatch(setMovieData(movie));
        dispatch(setPreviewModalOpen(true));
    };

    const onHover = () => {
        dispatch(cardHover(movie.id));
    };
    console.log(isCardHover, movie.id);
    const content = isCardHover === movie.id;
    return (
        <>
            {content ? (
                <Card
                    onClick={handleModalOpen}
                    sx={{
                        backgroundColor: "black",
                        maxHeight: 250,
                        maxWidth: 350,
                        objectFit: "cover",
                    }}
                    className="item"
                    onMouseEnter={onHover}
                    onMouseLeave={() => dispatch(cardHover(null))}
                >
                    <CardMedia
                        component="img"
                        image={movie.thumbnail}
                        style={{ height: 150, objectFit: "fill" }}
                    />
                    <CardContent>asdfasdfasdf</CardContent>
                </Card>
            ) : (
                <Card
                    sx={{
                        backgroundColor: "black",
                        width: 250,
                        height: 150,
                        objectFit: "cover",
                    }}
                    className="item"
                    onMouseEnter={onHover}
                    onMouseLeave={() => dispatch(cardHover(null))}
                >
                    <CardMedia component="img" image={movie.thumbnail} />
                </Card>
            )}
        </>
    );
};

export default TitleCard;
