import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./D/D-06 (lolomo-row)/Slider";
import Data from "./videoData.json"
import { useDispatch, useSelector } from 'react-redux';
import { select } from "./modules/slider.js"
import { setMovies } from "./modules/movie.js"
function App() {
  const { data } = Data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data))
  }, []);
  return (
    <div className="App" >
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default App;
