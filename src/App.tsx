import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList';
import VideoCard from './VideoCard';
import { videoData } from './dummyData.js';

function App() {
  return (
    <div className="App">
      <VideoList props={videoData} />
      <VideoCard />
    </div>
  );
}

export default App;
