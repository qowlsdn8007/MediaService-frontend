import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "CI_TmaxEnterprise.png";
import { onSignOut } from "api/sign";
import { AppBar, Toolbar } from "@mui/material";
import ProfileHeaderContainer from "components/C/ProfileHeaderContainer";
import { useSelector } from "react-redux";

const MainHeader = () => {
    const navigate = useNavigate();
    const { backgroundColor, rightNode } = useSelector(
        (state) => state.uiControl.headerProps,
    );

    const goToHome = () => {
        navigate("/");
    };
    const goToSignIn = () => {
        navigate("/signin");
    };
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: backgroundColor,
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <img
                    src={logo}
                    width="20%"
                    alt="logo"
                    onClick={goToHome}
                    style={{ cursor: "pointer" }}
                />
                {rightNode}
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;
