import { Divider, List, ListItem, MenuItem, Select } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PreviewModalTrack = () => {
    const movieData = useSelector((state) => state.uiControl.movieData);
    // 불변성 처리 안해줘서 series 값 안나오는듯
    console.log(movieData.series);
    return (
        <>
            <div className="episodeSelector-header">
                <h3 className="episodeSelector-label">series</h3>
                <Select className="episodeSelector-dropdown">
                    <MenuItem> ten</MenuItem>
                </Select>
            </div>
            <Divider />
            <List>
                {movieData.series.map((movie) => (
                    <ListItem>
                        <h3>1</h3>
                        <div className="image-wrapper">
                            <img
                                className="image-thumbnail"
                                src={movie.thumbnail}
                                height="150vh"
                                width="150vw"
                                alt=""
                            />
                            <progress max={1} value={0.30830302829}></progress>
                        </div>
                        <div>
                            <div>
                                <span>{movie.runningTime}</span>
                            </div>
                            <p> {movie.descriptions}</p>
                        </div>
                    </ListItem>
                ))}
            </List>
            ;
        </>
    );
};
export default PreviewModalTrack;
