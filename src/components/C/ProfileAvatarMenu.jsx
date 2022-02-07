import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { setProfile, setProfileAvatarAnchor } from "modules/profile";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/system";
import ProfileAvatar from "./ProfileAvatar";
import { useNavigate } from "react-router-dom";
import { onSignOut } from "api/sign";
import { getProfile } from "api/profile";

const ProfileAvatarMenu = ({ profileList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const anchor = useSelector((state) => state.profile.profileAvatarAnchor);
  const handleCloseMenu = () => {
    dispatch(setProfileAvatarAnchor(null));
  };

  const goToSignOut = () => {
    navigate("/signout");
  };
  const handleSignOut = () => {
    onSignOut();
    goToSignOut();
  };

  const goToManageAccount = () => {
    navigate("/yourAccount");
  };

  const switchProfile = useCallback(async (id) => {
    const profile = await getProfile(id);
    console.log(profile);
    await dispatch(setProfile(profile));
    handleCloseMenu(); // 메뉴창 꺼지도록
  }, []);

  return (
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
      <Divider />
      <MenuItem onClick={goToManageAccount}>
        <PermIdentityIcon />
        <Typography variant="string"> 계정</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleSignOut}>로그아웃</MenuItem>
    </Menu>
  );
};
export default ProfileAvatarMenu;
