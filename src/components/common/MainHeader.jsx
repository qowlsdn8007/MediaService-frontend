import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "CI_TmaxEnterprise.png";
import { onSignOut } from "api/sign";
import ProfileAvatar from "components/C/ProfileAvatar";
import { AppBar, Box, Toolbar } from "@mui/material";

const MainHeader = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/browse");
  };
  const goToSignOut = () => {
    navigate("/signout");
  };
  const handleSignOut = () => {
    onSignOut();
    goToSignOut();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <img src={logo} width="20%" alt="logo" onClick={goToMain} />
        <ProfileAvatar />
        <button onClick={handleSignOut}>로그아웃</button>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
