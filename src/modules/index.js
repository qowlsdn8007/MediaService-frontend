import {combineReducers} from 'redux';
import slider from './slider';
import movie from './movie';
import profile from './profile';
import user from './user';
const rootReducer = combineReducers({
    slider,
    movie,
    profile,
    user,
});

export default rootReducer;