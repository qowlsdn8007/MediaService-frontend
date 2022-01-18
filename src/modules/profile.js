import { createAction, handleActions } from "redux-actions";

const SETPROFILEID = "profile/SETPROFILEID";
const SETPROFILEIDFOREDIT = "profile/SETPROFILEIDFOREDIT";
const SETPROFILEMANAGETYPE = "profile/SETPROFILEMANAGETYPE";

export const setProfileId = createAction(SETPROFILEID);
export const setProfileIdForEdit = createAction(SETPROFILEIDFOREDIT);
export const setProfileManageType = createAction(SETPROFILEMANAGETYPE);

const initialState = {
  profileId: "",
  profileIdForEdit: "",
  proflieManageType: "default",
};
const profile = handleActions(
  {
    [SETPROFILEID]: (state, { payload: profileId }) => ({ profileId }),
    [SETPROFILEIDFOREDIT]: (state, { payload: profileIdForEdit }) => ({
      profileIdForEdit,
    }),
    [SETPROFILEMANAGETYPE]: (state, { payload: profileManageType }) => ({
      profileManageType,
    }),
  },
  initialState,
);

export default profile;
