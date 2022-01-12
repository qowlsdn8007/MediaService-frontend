import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withAuth } from "../hoc/withAuth";
import Slider from "../components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "../modules/movie";
import Data from "../videoData.json";
import MainHeader from "../components/common/MainHeader";

const AfterSignInRouter = () => {
  const { data } = Data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovies(data));
  }, []);

  return (
    <>
      <MainHeader />
      <Slider />
      <Slider />
      <Slider />
    </>
  );
};

export default withAuth(AfterSignInRouter);
