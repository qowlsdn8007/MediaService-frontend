import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { setMovieData, setPreviewModalOpen } from "modules/uiControl";

const TitleCardInfo = ({ movie }) => {
    const dispatch = useDispatch();
    const handleModalOpen = () => {
        dispatch(setMovieData(movie));
        dispatch(setPreviewModalOpen(true));
    };

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <PlayCircleOutlineIcon sx={{ color: "white" }} />
                    <AddCircleIcon sx={{ color: "white" }} />
                    <ThumbUpAltIcon sx={{ color: "white" }} />
                    <ThumbDownAltIcon sx={{ color: "white" }} />
                </Box>
                <ExpandCircleDownIcon
                    sx={{ color: "white", cursor: "pointer" }}
                    onClick={handleModalOpen}
                />
            </Box>
        </Box>
    );
};

export default TitleCardInfo;
