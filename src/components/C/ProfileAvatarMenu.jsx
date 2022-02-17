import {
    createTheme,
    Divider,
    Menu,
    MenuItem,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { setProfile, setProfileAvatarAnchor } from "modules/profile";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/system";
import ProfileAvatar from "./ProfileAvatar";
import { useNavigate } from "react-router-dom";
import { onSignOut } from "api/sign";
import { getProfile } from "api/profile";
import EditIcon from "@mui/icons-material/Edit";
import "./ProfileAvatarMenu.css";

const ProfileAvatarMenu = ({ profileList }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const anchor = useSelector((state) => state.profile.profileAvatarAnchor);
    const handleCloseMenu = async () => {
        await dispatch(setProfileAvatarAnchor(null));
    };

    const goToSignOut = () => {
        navigate("/signout");
    };
    const handleSignOut = async () => {
        await handleCloseMenu();
        await onSignOut();
        await goToSignOut();
    };

    const goToManageAccount = async () => {
        await handleCloseMenu(); // 메뉴창 꺼지도록
        navigate("/yourAccount");
    };

    const goToManageProfile = async () => {
        await handleCloseMenu(); // 메뉴창 꺼지도록
        navigate("/manageProfile");
    };

    const goToMain = async () => {
        navigate("/browse");
    };

    const handleGoToManageAccount = async () => {
        await handleCloseMenu();
        await goToManageAccount();
    };

    const switchProfile = useCallback(async (id) => {
        await handleCloseMenu(); // 메뉴창 꺼지도록
        const profile = await getProfile(id);
        console.log(profile);
        await dispatch(setProfile(profile));
        await goToMain();
    }, []);
    console.log(anchor);
    return (
        <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
            <Menu
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={handleCloseMenu}
                keepMounted
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                {profileList.map((profile) => (
                    <MenuItem onClick={() => switchProfile(profile.id)}>
                        <ProfileAvatar profile={profile} onClick={null} />
                        <Typography>{profile.name}</Typography>
                    </MenuItem>
                ))}
                <MenuItem onClick={goToManageProfile}>
                    <EditIcon />
                    <Typography>프로필 관리</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleGoToManageAccount}>
                    <PermIdentityIcon />
                    <Typography variant="string"> 계정</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSignOut}>로그아웃</MenuItem>
            </Menu>
        </ThemeProvider>
    );
};
export default ProfileAvatarMenu;
