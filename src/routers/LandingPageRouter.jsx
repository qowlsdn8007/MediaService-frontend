import React, { useEffect, useState } from "react";
import LandingHeader from "components/common/LandingHeader";
import LandinagPageContainer from "components/A/LandingPageContainer";
import MainHeader from "components/common/MainHeader";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "api/browserStorage";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import "./router.css";

const LandingPageRouter = () => {
    const [refreshToken, setRefreshToken] = useState(null);

    useEffect(() => {
        const token = getCookie("refresh_token");
        setRefreshToken(token);
    }, []);

    const location = useLocation();
    const url = location.pathname;
    const isLandingUrl = location.pathname === "/";
    const background = useSelector((state) => state.uiControl.background);

    return (
        <>
            {refreshToken && (url === "/" || url === "/signin") && (
                <Navigate replace to="/browse" />
            )}
            {/* 리다이렉트! */}

            <Box className={background}>
                <MainHeader />
                {isLandingUrl ? <LandinagPageContainer /> : <Outlet />}
            </Box>
        </>
    );
};

export default LandingPageRouter;
