import axios from "axios";
import React, { useEffect } from "react";
import { onSilentRefresh } from "../api/sign";
import { getCookie } from "../api/browserStorage";

export const withAuth = (Component) => (props) => {
  useEffect(() => {
    const accessToken = axios.defaults.headers.common["Authorization"];

    if (!accessToken) {
      const refreshToken = getCookie("refreshToken");
      if (!refreshToken) {
        return <p>페이지 권한이 없습니다.</p>;
      } else {
        onSilentRefresh();
      }
    }
  }, []);
  // 1. accessToken 유효시 통과
  // 2. accessToken 소실 및 만료시 => refresh Token 존재하면 silentRefresh로 갱신
  // 3. 둘 다 만료 시 접근 불가
  return <Component {...props} />;
};