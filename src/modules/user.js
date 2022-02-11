import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
const SETREFRESHTOKEN = "user/SETREFRESHTOKEN";
const SETACCESSTOKEN = "user/SETACCESSTOKEN";
export const setRefreshToken = createAction(SETREFRESHTOKEN);
export const setAccessToken = createAction(SETACCESSTOKEN);

const initialState = {
    refreshToken: null,
    accessToken: null,
};

const user = handleActions(
    {
        [SETREFRESHTOKEN]: (state, { payload: refreshToken }) =>
            produce(state, (draft) => {
                draft.refreshToken = refreshToken;
            }),
        [SETACCESSTOKEN]: (state, { payload: accessToken }) =>
            produce(state, (draft) => {
                draft.accessToken = accessToken;
            }),
    },
    initialState,
);

export default user;
