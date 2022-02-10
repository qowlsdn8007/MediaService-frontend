import { combineReducers } from "redux";
import slider from "./slider";
import movie from "./movie";
import profile from "./profile";
import user from "./user";
import uiControl from "./uiControl";
import card from "./card";
const rootReducer = combineReducers({
    slider,
    movie,
    profile,
    user,
    uiControl,
    card,
});

export default rootReducer;
