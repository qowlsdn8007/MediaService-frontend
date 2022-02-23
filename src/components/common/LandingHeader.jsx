import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "CI_TmaxEnterprise.png";
import { AppBar, Button, Toolbar } from "@mui/material";

const LandingHeader = ({ LoginButton = true }) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };

    const goToSignIn = () => {
        navigate("/signin");
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={logo} width="20%" alt="logo" />
                {LoginButton && (
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#e50914" }}
                        onClick={goToSignIn}
                    >
                        로그인
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default LandingHeader;
