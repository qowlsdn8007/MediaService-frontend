import React, { useEffect } from "react";
import "./App.css";
import Slider from "./D/D-06 (lolomo-row)/Slider";
import Data from "./videoData.json"
import { useDispatch } from 'react-redux';
import { setMovies } from "./modules/movie.js"
import LoginContainer from './B/LoginContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLoginRouter from './routers/BeforeSignInRouter';
import AfterLoginRouter from './routers/AfterSignInRouter';
import LandingPageRouter from './routers/LandingPageRouter';
import SignUpRouter from './routers/SignUpRouter';
import SignInHelpRouter from './routers/SignInHelpRouter';
function App() {
  const { data } = Data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data))
  }, []);
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPageRouter />}></Route>
          <Route path="/login" element={<BeforeLoginRouter />}></Route>
          <Route path="/browse" element={<AfterLoginRouter />}></Route>
          <Route path="/signup" element={<SignUpRouter />}></Route>
          <Route path="/signinhelp" element={<SignInHelpRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
