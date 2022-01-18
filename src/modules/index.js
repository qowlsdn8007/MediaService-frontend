import { combineReducers } from "redux";
import slider from "./slider";
import movie from "./movie";
import profile from "./profile";
import user from "./user";
import uiControl from "./uiControl";
const rootReducer = combineReducers({
  slider,
  movie,
  profile,
  user,
  uiControl,
});

export default rootReducer;
