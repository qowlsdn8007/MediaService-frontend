import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

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
        [SETPROFILE]: (state, { payload: currentProfile }) =>
            produce(state, (draft) => {
                draft.currentProfile = currentProfile;
            }),
        [SETPROFILEIDFOREDIT]: (state, { payload: profileIdForEdit }) =>
            produce(state, (draft) => {
                draft.profileIdForEdit = profileIdForEdit;
            }),
        [SETPROFILEMANAGETYPE]: (state, { payload: profileManageType }) =>
            produce(state, (draft) => {
                draft.profileManageType = profileManageType;
            }),
        [SETPROFILEAVATORANCHOR]: (state, { payload: profileAvatarAnchor }) =>
            produce(state, (draft) => {
                draft.profileAvatarAnchor = profileAvatarAnchor;
            }),
    },
    initialState,
);

export default profile;
