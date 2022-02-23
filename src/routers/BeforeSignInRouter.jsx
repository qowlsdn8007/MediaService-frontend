import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginContainer from "components/B/signIn/LoginContainer";
import { Box } from "@mui/material";
import MainHeader from "components/common/MainHeader";

const BeforeLoginRouter = () => {
    const navigate = useNavigate();
    const accessToken = axios.defaults.headers.common["Authorization"];
    useEffect(() => {
        if (accessToken) {
            navigate("/browse");
        }
    }, []);

    return (
        <>
            <Box>
                <LoginContainer />
            </Box>
        </>
    );
};

export default BeforeLoginRouter;
