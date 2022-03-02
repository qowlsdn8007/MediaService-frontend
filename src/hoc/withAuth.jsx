import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
//import { onSilentRefresh } from "api/sign";
import { getCookie } from "api/browserStorage";
import { useDispatch } from "react-redux";
import { getLatestProfileId, getProfile } from "api/profile";
import { setProfile } from "modules/profile";
import { Navigate, useNavigate } from "react-router-dom";

//   profileId,  accessToken, refreshToken 확인 및 발행하는 hoc
export const withAuth = (Component) => (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLatestProfile = async (id) => {
        const response = await getProfile(id);
        return response;
    };

    const getPid = useCallback(async () => {
        const pid = getLatestProfileId();
        if (pid !== "") {
            const latestProfile = await getLatestProfile(pid);
            dispatch(setProfile(latestProfile));
        }
    }, [dispatch]); // 최근 프로필 설정

    useEffect(() => {
        const accessToken = getCookie("access_token");
        const refreshToken = getCookie("refresh_token");
        if (!(accessToken || refreshToken)) {
            navigate("/error");
        } else {
            //onSilentRefresh(); // 자동 접속
            getPid(); // 최근 프로필에 맞게 접속, 최근 기록 없으면 선택컴포넌트 출력
        }
    }, [getPid, navigate]);

    // 1. accessToken 유효시 통과
    // 2. accessToken 소실 및 만료시 => refresh Token 존재하면 silentRefresh로 갱신
    // 3. 둘 다 만료 시 접근 불가
    return <Component {...props} />;
};
