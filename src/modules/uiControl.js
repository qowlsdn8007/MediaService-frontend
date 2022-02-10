import { createAction, handleActions } from "redux-actions";

const SETPREVIEWMODALOPEN = "ui/SETPREVIEWMODALOPEN";

export const setPreviewModalOpen = createAction(SETPREVIEWMODALOPEN);

const initialState = {
    previewModalOpen: false,
};

const uiControl = handleActions(
    {
        [SETPREVIEWMODALOPEN]: (state, { payload: previewModalOpen }) => ({
            ...state,
            previewModalOpen,
        }),
    },
    initialState,
);
export default uiControl;
