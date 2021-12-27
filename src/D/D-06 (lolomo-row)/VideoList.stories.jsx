import React from "react";
import Slider from "./VideoList";
import Data from "../../videoData.json";

const { data } = Data;

export default {
  title: "APP",
  component: Slider,
};

export const Slidertest = () => <Slider props={data} />;
