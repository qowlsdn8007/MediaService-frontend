import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import Slider, { select, elementRef } from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import {enhancer} from 'addon-redux'


import Data from "./videoData.json";

const { data } = Data;

const store = createStore(rootReducer, {}, enhancer);

export default store;


