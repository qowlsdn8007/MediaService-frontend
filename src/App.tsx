import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="App">
      <VideoList />
      <VideoCard />
    </div>
  );
}

export default App;
