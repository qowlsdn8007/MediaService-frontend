import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
const SETMOVIES = "movie/SETMOVIES";

export const setMovies = createAction(SETMOVIES);

const initialState = {
    movies: [],
};
const movie = handleActions(
    {
        [SETMOVIES]: (state, { payload: movies }) =>
            produce(state, (draft) => {
                draft.movies = movies;
            }),
    },
    initialState,
);

export default movie;
