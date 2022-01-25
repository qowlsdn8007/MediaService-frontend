import axios from "axios";
import { useSelector } from "react-redux";
import {
  getCookie,
  getLocalItem,
  setCookie,
  setLocalItem,
} from "./browserStorage";
import { deleteLatestProfile } from "./profile";

const AUTH = "/auth";
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24 hour

export const onSignIn = async (email, password) => {
  const data = {
    email,
    password,
  };
  await axios
    .post(AUTH + "/sign-in", data)
    .then((res) => {
      const { accessToken } = res.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`; // header에 항상 디폴트로 accessToken 설정
    })
    .catch((err) => {
      console.log(err);
      // ERROR 컴포넌트를 보여주든 어찌든 후에 꼭 처리 로직 작성
    });
};

<<<<<<< HEAD
export const onSilentRefresh = async () => {
  await axios
    .get(AUTH + "/silent-refresh")
=======
export const onSilentRefresh = () => {
  axios
    .post(AUTH + "/silent-refresh")
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
    .then(onLoginSuccess)
    .catch((err) => {
      console.log(err);
      //로직 작성
    });
};

const onLoginSuccess = (res) => {
  const { accessToken } = res.data;
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

export const onSignOut = () => {
  axios.defaults.headers.common["Authorization"] = null; // accessToken 초기화
  setCookie("refreshToken", "", "-1"); // refreshToken 삭제
  deleteLatestProfile(); // 최근 접속한 프로필 삭제
};

/* export const onCheckedAutoSignIn = () => {
    const autoCheck = getLocalItem("autoCheck", false); // false는 default 값
    if (autoCheck) {
      // 이전에 자동 로그인 체크했다면
      if (getCookie('refreshToken')) { //  refreshToken이 유효하다면
        return true;
      }
      else {
        setLocalItem('autoCheck', false);  // refresh 유효하지 않다면 autoCheck 해제된 상태로 init
        return false;
      }
    }
    return false;
} */
<<<<<<< HEAD

export const emailCheck = async (email) => {
  const result = null;
  await axios
    .post(AUTH + "/email", email)
    .then((res) => (result = res.status === 200 ? true : false))
    .catch((err) => console.log(err));

  return result;
};
=======
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
