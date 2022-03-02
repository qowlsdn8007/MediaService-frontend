import { getUserProfiles } from "api/profile";
import AddProfileContainer from "components/C/AddProfileContainer";
import EditProfileContainer from "components/C/EditProfileContainer";
import ProfileContainer from "components/C/ProfileContainer";
import { setProfileForEdit, setProfileManageType } from "modules/profile";
import { setHeaderRightNode } from "modules/uiControl";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManageProfileRouter = () => {
    const profileList = useSelector((state) => state.profile.profileList);
    const manageType = useSelector((state) => state.profile.profileManageType);
    const chosenProfileId = useSelector(
        (state) => state.profile.profileIdForEdit,
    );
    const dispatch = useDispatch();

    const handleProfileChosen = useCallback(
        (profile) => {
            dispatch(setProfileForEdit(profile));
            dispatch(setProfileManageType("edit"));
        },
        [dispatch],
    );

    const getProfileList = async () => {
        const list = await getUserProfiles();
    };

    useEffect(() => {
        getProfileList();
        dispatch(setProfileManageType("default"));
    }, []);

    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/browse");
    };

    dispatch(setHeaderRightNode(null)); //  헤더 우측 비게

    return (
        <div className="dark-container">
            {manageType === "default" ? (
                <ProfileContainer
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
