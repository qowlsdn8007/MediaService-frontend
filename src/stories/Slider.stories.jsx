import React from "react";
import Slider from "./Slider";
import Data from "./videoData.json";

const { data } = Data;

export default {
  title: "Example/Lolomo/Slider",
  component: Slider,
};

export const Slidertest = () => <Slider props={data} />;
