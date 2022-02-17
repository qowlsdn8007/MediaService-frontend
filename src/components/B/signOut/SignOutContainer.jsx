import { Box } from "@mui/material";
import { useEffect } from "@storybook/addons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";

const SignOutContainer = ({ goToHome }) => {
    return (
        <Box className="signout-center-box">
            <Box className="signout-container">
                <h1 className="title">벌써 나가시려고요?</h1>
                <p>
                    참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는
                    없습니다. 공용 컴퓨터에서 이용한 경우에만 로그아웃하시면
                    됩니다. 30초 후 Netflix.com으로 이동합니다.
                </p>
                <button className="button" onClick={goToHome}>
                    지금 이동
                </button>
            </Box>
        </Box>
    );
};

export default SignOutContainer;
