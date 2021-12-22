import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import Slider, { select, elementRef } from "./Slider";
import { useSelector, useDispatch } from "react-redux";

import Data from "./videoData.json";

const { data } = Data;

const store = createStore(rootReducer);

const withReduxMockStore = (story) => (
  <Provider store={store}>{story}</Provider>
);

export default {
  title: "Example/SliderContainer",
  component: Slider,
  decorator: [withReduxMockStore],
};

export const Sample = () => {
  const dispatch = useDispatch();
  <Slider props={data} onSelectSlide={() => dispatch(select())} />;
};
