import { Box } from "@mui/system";
import LandingHeader from "components/common/LandingHeader";
import React from "react";
import LoginFormMain from "./LoginFormMain";
import LoginFormOther from "./LoginFormOther";
import "./login.css";
import { useDispatch } from "react-redux";
import { setBackground } from "modules/uiControl";

const LoginContainer = () => {
    const dispatch = useDispatch();
    dispatch(setBackground("landing-container"));

    return (
        <div className="login-container">
            <Box className="loginform">
                <LoginFormMain />
                <LoginFormOther />
            </Box>
        </div>
    );
};

export default LoginContainer;
