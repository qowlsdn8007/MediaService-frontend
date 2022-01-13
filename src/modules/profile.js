import { createAction, handleActions} from 'redux-actions';

const SETPROFILEID = "profile/SETPROFILEID";

export const setProfileId = createAction(SETPROFILEID);

const initialState = {
        profileId: "",
    }
const profile = handleActions(
    {
        [SETPROFILEID]: (state, {payload: profileId}) => ({profileId}),
    },
    initialState,
);

export default profile;