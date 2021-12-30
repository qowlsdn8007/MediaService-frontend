import { createAction, handleActions} from 'redux-actions';
import { useSelector } from 'react-redux';

const slidePerPage = 6;

const SELECT = "slider/SELECT";
const SETELEMENTREF = "slider/ELEMENTREF";
const SETWIDTH = "slider/SETWIDTH";
const SETPAGINATORTOTALPAGE = "slider/SETPAGINATORTOTALPAGE";
const SETCURRENTSLIDEPAGE = "slider/SETCURRENTSLIDEPAGE";

export const select = createAction(SELECT);
export const setElementRef = createAction(SETELEMENTREF);
export const setWidth = createAction(SETWIDTH);
export const setPaginatorTotalPage = createAction(SETPAGINATORTOTALPAGE);
export const setCurrentSlidePage = createAction(SETCURRENTSLIDEPAGE);


const initialState = {
    elementRef: null,
    currentSlide: null,
    width: null,
    currentSlidePage: 0,
    sliderTotalPage: 0,
}

const slider = handleActions(
    {
        [SETWIDTH]: (state, {payload: width}) => ({...state, width: width}),
        [SELECT]: (state, {payload: movie}) => ({...state, currentSlide: movie}),
        [SETELEMENTREF]: (state, {payload: currentRef}) => ({...state, elementRef: currentRef}),
        [SETPAGINATORTOTALPAGE]: (state, {payload: moviesLen}) => ({...state, sliderTotalPage: Math.ceil(moviesLen / slidePerPage)}),
        [SETCURRENTSLIDEPAGE]: (state, {payload: type}) => (
            ((type === "prev") && (state.currentSlidePage > 0)) && 
            {...state, currentSlidePage: state.currentSlidePage - 1}
            ((type === "next") && (state.currentSlidePage < state.sliderTotalPage )) && 
            {...state, currentSlidePage: state.currentSlidePage + 1}
        )
    },
    initialState,
);

export default slider;
