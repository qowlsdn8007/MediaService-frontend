import React, { useEffect } from "react";
import "./App.css";
import Slider from "./D/D-06 (lolomo-row)/Slider";
import Data from "./videoData.json"
import { useDispatch } from 'react-redux';
import { setMovies } from "./modules/movie.js"
import LoginContainer from './B/LoginContainer';
function App() {
  const { data } = Data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data))
  }, []);
  return (
    <div className="App" >
      <LoginContainer />
      {/* <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider /> */}
    </div>
  );
}

export default App;
