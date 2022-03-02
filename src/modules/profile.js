import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SETPROFILE = "profile/SETPROFILE";

const SETPROFILEFOREDIT = "profile/SETPROFILEIDFOREDIT";
const SETPROFILEFOREDITIMAGE = "profile/SETPROFILEFOREDITIMAGE";
const SETPROFILEFOREDITNAME = "profile/SETPROFILEFOREDITNAME";
const SETPROFILEFOREDITRATE = "profile/SETPROFILEFOREDITRATE";

const SETPROFILEMANAGETYPE = "profile/SETPROFILEMANAGETYPE";
const SETPROFILEAVATORANCHOR = "profile/SETPROFILEAVATORANCHOR";
const SETPROFILELIST = "profile/SETPROFILELIST";

export const setProfile = createAction(SETPROFILE);

export const setProfileForEdit = createAction(SETPROFILEFOREDIT);
export const setProfileForEditImage = createAction(SETPROFILEFOREDITIMAGE);
export const setProfileForEditName = createAction(SETPROFILEFOREDITNAME);
export const setProfileForEditRate = createAction(SETPROFILEFOREDITRATE);

export const setProfileManageType = createAction(SETPROFILEMANAGETYPE);
export const setProfileAvatarAnchor = createAction(SETPROFILEAVATORANCHOR);
export const setProfileList = createAction(SETPROFILELIST);

const initialState = {
    profile: null,
    profileList: [],
    profileForEdit: {
        mainImage: "",
        name: "",
        rate: "",
    },
    profileManageType: "default",

    profileAvatarAnchor: null,
};
const profile = handleActions(
    {
        // 불변성 유지해주어야해
        [SETPROFILE]: (state, { payload: profile }) =>
            produce(state, (draft) => {
                draft.profile = profile;
            }),

        [SETPROFILELIST]: (state, { payload: profileList }) =>
            produce(state, (draft) => {
                draft.profileList = profileList;
            }),

        [SETPROFILEFOREDIT]: (state, { payload: profileForEdit }) =>
            produce(state, (draft) => {
                draft.profileForEdit = profileForEdit;
            }),
        [SETPROFILEFOREDITIMAGE]: (state, { payload: image }) =>
            produce(state, (draft) => {
                draft.profileForEdit.mainImage = image;
            }),
        [SETPROFILEFOREDITNAME]: (state, { payload: name }) =>
            produce(state, (draft) => {
                draft.profileForEdit.name = name;
            }),
        [SETPROFILEFOREDITRATE]: (state, { payload: rate }) =>
            produce(state, (draft) => {
                draft.profileForEdit.rate = rate;
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
