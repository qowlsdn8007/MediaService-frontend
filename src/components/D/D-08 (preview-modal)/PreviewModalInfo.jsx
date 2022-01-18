import React from "react";

const PreviewModalInfo = () => {
  return (
    <div className="info-container">
      <div className="info-detail-left">
        <h3>시즌 1 1화</h3>
        <p className="info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          accusamus minima eaque voluptate obcaecati veniam, hic molestias
          provident, aliquid assumenda totam minus eos, id aperiam neque.
          Asperiores sit totam assumenda.
        </p>
      </div>
      <div className="info-detial-right">
        <div className="info-actor">
          <span className="info-actor-label">출연</span>
          <span>actor1</span>
          <span>actor2</span>
        </div>
        <div className="info-genre">
          <span className="info-genre-label">장르</span>
          <span>genre1</span>
          <span>genre2</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewModalInfo;
