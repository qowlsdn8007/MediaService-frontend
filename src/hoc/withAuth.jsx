import axios from "axios";
import React, { useEffect } from "react";
import { onSilentRefresh } from "../api/signin";
export const withAuth = (Component) => (props) => {
  useEffect(() => {
    const { accessToken } = axios.defaults.headers.common["Authorization"];
    console.log(accessToken);
    console.log(!accessToken);
    if (!accessToken) {
      if (!document.cookie["refreshToken"]) {
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
