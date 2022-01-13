import {combineReducers} from 'redux';
import slider from './slider';
import movie from './movie';
import profile from './profile';

const rootReducer = combineReducers({
    slider,
    movie,
    profile,
});

export default rootReducer;