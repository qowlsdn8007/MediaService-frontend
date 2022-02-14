import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "CI_TmaxEnterprise.png";
import { onSignOut } from "api/sign";
import { AppBar, Toolbar } from "@mui/material";
import ProfileHeaderContainer from "components/C/ProfileHeaderContainer";

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
        <AppBar
            position="static"
            sx={{
                backgroundColor: "transparent",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <img
                    src={logo}
                    width="20%"
                    alt="logo"
                    onClick={goToMain}
                    style={{ cursor: "pointer" }}
                />
                <ProfileHeaderContainer />
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;
