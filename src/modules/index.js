import {combineReducers} from 'redux';
import slider from './slider';
import movie from './movie';
const rootReducer = combineReducers({
    slider,
    movie
});

export default rootReducer;