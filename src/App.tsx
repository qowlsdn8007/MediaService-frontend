import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoList from "./D/D-06 (lolomo-row)/VideoList";
import Data from "./videoData.json"

function App() {
  const { data } = Data;
  return (
    <div className="App">
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
    </div>
  );
}

export default App;
