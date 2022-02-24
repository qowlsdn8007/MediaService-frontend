import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import LoginButton from "components/common/LoginButton";

const SETPREVIEWMODALOPEN = "ui/SETPREVIEWMODALOPEN";
const SETMOVIEDATA = "ui/SETMOVIEDATA";
const SETHEADERBG = "ui/SETHEADERBG";
const SETHEADERRIGHTNODE = "ui/SETHEADERRIGHTNODE";
const SETBACKGROUND = "Ui/SETBACKGROUND";

export const setPreviewModalOpen = createAction(SETPREVIEWMODALOPEN);
export const setMovieData = createAction(SETMOVIEDATA);
export const setHeaderBg = createAction(SETHEADERBG);
export const setHeaderRightNode = createAction(SETHEADERRIGHTNODE);
export const setBackground = createAction(SETBACKGROUND);

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
    headerProps: {
        backgroundColor: "transparent",
        rightNode: <LoginButton />,
    },
    background: "landing-container",
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
        [SETHEADERBG]: (state, { payload: backgroundColor }) =>
            produce(state, (draft) => {
                draft.headerProps.backgroundColor = backgroundColor;
            }),
        [SETHEADERRIGHTNODE]: (state, { payload: rightNode }) =>
            produce(state, (draft) => {
                draft.headerProps.rightNode = rightNode;
            }),

        [SETBACKGROUND]: (state, { payload: background }) =>
            produce(state, (draft) => {
                draft.background = background;
            }),
    },
    initialState,
);
export default uiControl;
