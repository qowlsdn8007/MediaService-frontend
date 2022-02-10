import { createAction, handleActions } from "redux-actions";

const SETMOVIES = "movie/SETMOVIES";

export const setMovies = createAction(SETMOVIES);

const initialState = {
    movies: null,
};
const movie = handleActions(
    {
        [SETMOVIES]: (state, { payload: movies }) => ({ ...state, movies }),
    },
    initialState,
);

export default movie;
