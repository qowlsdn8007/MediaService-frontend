import React from "react";
import ProfileList from "./ProfileList";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderRightNode } from "modules/uiControl";
import AddProfileContainer from "./AddProfileContainer";
import { Box } from "@mui/material";

const ProfileContainer = ({
    title,
    list,
    type,
    btnName,
    onProfileClick,
    onButtonClick,
}) => {
    const dispatch = useDispatch();
    dispatch(setHeaderRightNode(null)); //  헤더 우측 비게
    const mtype = useSelector((state) => state.profile.profileManageType);
    return (
        <>
            {mtype === "default" ? (
                <Box className="profile-center-box">
                    <h1 className="text">{title}</h1>
                    <ProfileList
                        list={list}
                        type={type}
                        onProfileClick={onProfileClick}
                    />
                    <button onClick={onButtonClick} className="profile-button">
                        {btnName}
                    </button>
                </Box>
            ) : (
                <AddProfileContainer />
            )}
        </>
    );
};

export default ProfileContainer;
