import React from "react";
import Slider from "./Slider";
import Data from "../../videoData.json";
import { ARG_REDUX_PATH } from "addon-redux";

const { data } = Data;

export default {
  title: "Example/Lolomo/Slider",
  component: Slider,
  argTypes: {
    currentSlide1: {
      control: { type: "currentSlide" },
      [ARG_REDUX_PATH]: "asdf",
    },
  },
};

export const Slidertest = () => <Slider props={data} />;
