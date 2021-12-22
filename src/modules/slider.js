import { createAction, handleActions} from 'redux-actions';

const SELECT = "slider/SELECT";
const ELEMENTREF = "slider/ELEMENTREF";

export const select = createAction(SELECT);
export const elementRef = createAction(ELEMENTREF);


const initialState = {
    elementRef: null,
    currentSlide: null,
    width: null,
    
}

const slide = handleActions(
    {
        [SELECT]: (state, {payload: movie}) => ({...state, currentSlide: movie}),
        [ELEMENTREF]: (state, {payload: currentRef}) => ({...state, elementRef: currentRef}),
    },
    initialState,
);

export default slide;
