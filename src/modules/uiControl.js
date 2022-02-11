import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SETPREVIEWMODALOPEN = "ui/SETPREVIEWMODALOPEN";
const SETMOVIEDATA = "ui/SETMOVIEDATA";

export const setPreviewModalOpen = createAction(SETPREVIEWMODALOPEN);
export const setMovieData = createAction(SETMOVIEDATA);

const initialState = {
    previewModalOpen: false,
    movieData: {
        descriptions: "",
        actors: "",
        genre: "",
        series: null,
        thumbnail: "",
        name: "",
    },
};

const uiControl = handleActions(
    {
        [SETPREVIEWMODALOPEN]: (state, { payload: previewModalOpen }) =>
            produce(state, (draft) => {
                draft.previewModalOpen = previewModalOpen;
            }),

        [SETMOVIEDATA]: (state, { payload: movieData }) =>
            produce(state, (draft) => {
                draft.movieData = movieData;
            }),
    },
    initialState,
);
export default uiControl;
