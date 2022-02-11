import React from "react";
import { useSelector } from "react-redux";

const PreviewModalInfo = () => {
    const movieData = useSelector((state) => state.uiControl.movieData);
    return (
        <div className="info-container">
            <div className="info-detail-left">
                <h3>시즌 1 1화</h3>
                <p className="info-text">{movieData.descriptions}</p>
            </div>
            <div className="info-detial-right">
                <div className="info-actor">
                    <span className="info-actor-label">출연 : </span>
                    {movieData.actors}
                </div>
                <div className="info-genre">
                    <span className="info-genre-label">장르 : </span>
                    {movieData.genre}
                </div>
            </div>
        </div>
    );
};

export default PreviewModalInfo;
