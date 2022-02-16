import { getProfiles } from "api/profile";
import AddProfileContainer from "components/C/AddProfileContainer";
import EditProfileContainer from "components/C/EditProfileContainer";
import ProfileContainer from "components/C/ProfileContainer";
import { setProfileIdForEdit, setProfileManageType } from "modules/profile";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/browse");
    };

    return (
        <div className="container">
            {manageType === "default" ? (
                <ProfileContainer
                    list={profileList}
                    title="프로필 관리"
                    type="manage"
                    btnName="완료"
                    onProfileClick={handleProfileChosen}
                    onButtonClick={goToMain}
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
