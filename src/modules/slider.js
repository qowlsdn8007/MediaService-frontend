import { createAction, handleActions} from 'redux-actions';

const SELECT = "slider/SELECT";
const SETELEMENTREF = "slider/ELEMENTREF";
const SETWIDTH = "slider/SETWIDTH";

export const select = createAction(SELECT);
export const setElementRef = createAction(SETELEMENTREF);
export const setWidth = createAction(SETWIDTH);

const initialState = {
    elementRef: null,
    currentSlide: null,
    width: null,
    sliderPaginatorCurrent: 0,
    sliderTotalPage: 0,
}

const slider = handleActions(
    {
        [SETWIDTH]: (state, {payload: width}) => ({...state, width: width}),
        [SELECT]: (state, {payload: movie}) => ({...state, currentSlide: movie}),
        [SETELEMENTREF]: (state, {payload: currentRef}) => ({...state, elementRef: currentRef}),
    },
    initialState,
);

export default slider;
