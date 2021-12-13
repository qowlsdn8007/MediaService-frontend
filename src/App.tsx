import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoList from "./D/D-06 (lolomo-row)/VideoList";
import VideoCard from "./D/D-07 (title-card)/VideoCard";
import axios from 'axios';
import Data from "./videoData.json"

function App() {
  const { data } = Data;
  console.log(data);
  return (
    <div className="App">
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoList props={data} />
      <VideoCard />
    </div>
  );
}

export default App;
