import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import LoginButton from "components/common/LoginButton";

const SETPREVIEWMODALOPEN = "ui/SETPREVIEWMODALOPEN";
const SETMOVIEDATA = "ui/SETMOVIEDATA";
const SETHEADERPROPS = "ui/SETHEADERPROPS";
const SETBACKGROUND = "Ui/SETBACKGROUND";

export const setPreviewModalOpen = createAction(SETPREVIEWMODALOPEN);
export const setMovieData = createAction(SETMOVIEDATA);
export const setHeaderProps = createAction(SETHEADERPROPS);
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
        [SETHEADERPROPS]: (state, { payload: headerProps }) =>
            produce(state, (draft) => {
                draft.headerProps = headerProps;
            }),
        [SETBACKGROUND]: (state, { payload: background }) =>
            produce(state, (draft) => {
                draft.background = background;
            }),
    },
    initialState,
);
export default uiControl;
