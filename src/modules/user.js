import { createAction, handleActions} from 'redux-actions';

const SETREFRESHTOKEN = "user/SETREFRESHTOKEN";
const SETACCESSTOKEN = "user/SETACCESSTOKEN";
export const setRefreshToken = createAction(SETREFRESHTOKEN);
export const setAccessToken = createAction(SETACCESSTOKEN);

const initialState = {
        refreshToken: null,
        accessToken: null,
    }


const user = handleActions(
    {
        [SETREFRESHTOKEN]: (state, {payload: refreshToken}) => ({refreshToken}),
        [SETACCESSTOKEN]: (state, {payload: accessToken}) => ({accessToken}),
    },
    initialState,
);

export default user;