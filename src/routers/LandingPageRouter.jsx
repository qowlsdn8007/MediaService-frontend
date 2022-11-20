import React, { useEffect, useState } from "react";
import LandingHeader from "components/common/LandingHeader";
import LandinagPageContainer from "components/A/LandingPageContainer";
import MainHeader from "components/common/MainHeader";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "api/browserStorage";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import "./router.css";
import "./landingPageRouter.css";

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
            <Box className="story-card-container">
                <Box className="text-card">
                    <h1 className="story-card-title">TV로 즐기세요.</h1>
                    <h2 className="story-card-subtitle">
                        스마트 TV, PlayStation, Xbox, Chromecast, Apple TV,
                        블루레이 플레이어 등 다양한 디바이스에서 시청하세요.
                    </h2>
                </Box>
                <Box
                    style={{
                        height: "480px",
                        widht: "640p",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <img
                        style={{ zIndex: 1 }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        alt="banner-image1"
                    />
                    <video
                        style={{
                            position: "absolute",
                            zIndex: 0,
                            top: 90,
                            left: 80,
                        }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"
                        autoPlay={true}
                        loop={true}
                        playsInline={true}
                        muted={true}
                    />
                </Box>
            </Box>
            <Box className="story-card-container">
                <Box
                    style={{
                        height: "480px",
                        widht: "640p",
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <img
                        style={{ zIndex: 1 }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                        alt="banner-image1"
                    />
                    <video
                        style={{
                            position: "absolute",
                            width: "400px",
                            top: 50,
                            left: 120,
                            zIndex: 0,
                        }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                        type="video/mp4"
                        autoPlay={true}
                        loop={true}
                        playsInline={true}
                        muted={true}
                    />
                </Box>
                <Box className="text-card">
                    <h1 className="story-card-title">
                        다양한 디바이스에서 시청하세요.
                    </h1>
                    <h2 className="story-card-subtitle">
                        각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서
                        무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
                    </h2>
                </Box>
            </Box>
            <Box className="story-card-container">
                <Box className="text-card">
                    <h1>어린이 전용 프로필을 만들어 보세요.</h1>
                    <h2>
                        자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험.
                        자녀에게 이 특별한 경험을 선물하세요. 넷플릭스
                        회원이라면 무료입니다.
                    </h2>
                </Box>
                <Box
                    style={{
                        height: "480px",
                        widht: "640p",
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <img
                        src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf"
                        alt="banner-image1"
                    />
                </Box>
            </Box>
        </>
    );
};

export default LandingPageRouter;
