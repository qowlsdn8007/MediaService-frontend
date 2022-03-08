import { Avatar, IconButton } from "@mui/material";
import { getProfiles } from "api/profile";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileAvatar = ({ onClick, profile }) => {
    const src = profile && profile.mainImage;
    return (
        <IconButton onClick={onClick}>
            <Avatar variant="square" src={src}></Avatar>
        </IconButton>
    );
};
export default ProfileAvatar;
