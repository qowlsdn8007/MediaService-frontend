import { createAction, handleActions } from "redux-actions";

const SETPROFILE = "profile/SETPROFILEID";
const SETPROFILEIDFOREDIT = "profile/SETPROFILEIDFOREDIT";
const SETPROFILEMANAGETYPE = "profile/SETPROFILEMANAGETYPE";
const SETPROFILEAVATORANCHOR = "profile/SETPROFILEAVATORANCHOR";

export const setProfile = createAction(SETPROFILE);
export const setProfileIdForEdit = createAction(SETPROFILEIDFOREDIT);
export const setProfileManageType = createAction(SETPROFILEMANAGETYPE);
export const setProfileAvatarAnchor = createAction(SETPROFILEAVATORANCHOR);

const initialState = {
    currentProfile: null,
    profileIdForEdit: "",
    proflieManageType: "default",

    profileAvatarAnchor: null,
};
const profile = handleActions(
    {
        // 불변성 유지해주어야해
        [SETPROFILE]: (state, { payload: currentProfile }) => ({
            ...state,
            currentProfile,
        }),
        [SETPROFILEIDFOREDIT]: (state, { payload: profileIdForEdit }) => ({
            ...state,
            profileIdForEdit,
        }),
        [SETPROFILEMANAGETYPE]: (state, { payload: profileManageType }) => ({
            ...state,
            profileManageType,
        }),
        [SETPROFILEAVATORANCHOR]: (
            state,
            { payload: profileAvatarAnchor },
        ) => ({
            ...state,
            profileAvatarAnchor,
        }),
    },
    initialState,
);

export default profile;
