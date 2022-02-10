import { Avatar, IconButton } from "@mui/material";
import { getProfiles } from "api/profile";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileAvatar = ({ onClick, profile }) => {
  const src = profile && profile.main_image;
  return (
    <IconButton onClick={onClick}>
      <Avatar variant="square" src={src}></Avatar>
    </IconButton>
  );
};
export default ProfileAvatar;
