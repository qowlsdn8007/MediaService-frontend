import { getProfiles } from "api/profile";
import AddProfileContainer from "components/C/AddProfileContainer";
import EditProfileContainer from "components/C/EditProfileContainer";
import ProfileContainer from "components/C/ProfileContainer";
import { setProfileIdForEdit, setProfileManageType } from "modules/profile";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ManageProfileRouter = () => {
  const [profileList, setProfileList] = useState([]);
  const manageType = useSelector((state) => state.profile.profileManageType);
  const chosenProfileId = useSelector(
    (state) => state.profile.profileIdForEdit,
  );
  const dispatch = useDispatch();
  const handleProfileChosen = useCallback(
    (id) => {
      dispatch(setProfileIdForEdit());
      dispatch(setProfileManageType("edit"));
    },
    [dispatch],
  );

  const getProfileList = async () => {
    const list = await getProfiles();
    setProfileList(list);
  };

  useEffect(() => {
    getProfileList();
    dispatch(setProfileManageType("default"));
  }, []);

  return (
    <div>
      {manageType === "default" ? (
        <ProfileContainer
          list={profileList}
          title="프로필 관리"
          type="manage"
          btnName="완료"
          onClick={handleProfileChosen}
        />
      ) : manageType === "edit" ? (
        <EditProfileContainer />
      ) : (
        manageType === "add" && <AddProfileContainer />
      )}
    </div>
  );
};

export default ManageProfileRouter;
