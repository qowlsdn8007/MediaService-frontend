import { Box } from "@mui/system";
import LandingHeader from "components/common/LandingHeader";
import React from "react";
import LoginFormMain from "./LoginFormMain";
import LoginFormOther from "./LoginFormOther";
import "./login.css";

const LoginContainer = () => {
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
