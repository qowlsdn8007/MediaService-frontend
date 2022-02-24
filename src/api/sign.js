import axios from "axios";
import { setCookie } from "./browserStorage";
import { deleteLatestProfile } from "./profile";

const AUTH = "/auth";
const USER = "/users";
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24 hour

export const onSignUp = async (data) => {
    let result = {};
    await axios
        .post(AUTH + "/sign-up", data)
        .then((res) => {
            result = res.data;
        })
        .catch((err) => console.log(err));
    return result;
};

export const onSignIn = async (email, password) => {
    const data = {
        email,
        password,
    };
    await axios
        .post(AUTH + "/sign-in", data)
        .then((res) => {
            if (res.data.hasOwnProperty("errorCode")) {
                console.log(res.data.errorCode); // 에러 처리 로직
            }
            const { accessToken, refreshToken } = res.data;
            setCookie("refreshToken", refreshToken.id, 90);
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${accessToken}`; // header에 항상 디폴트로 accessToken 설정
        })
        .catch((err) => {
            console.log(err);
            return err;
            // ERROR 컴포넌트를 보여주든 어찌든 후에 꼭 처리 로직 작성
        });
};
export const onSilentRefresh = async () => {
    await axios
        .get(AUTH + "/silent-refresh")
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
//export const onChangeEmail = async (email) => {};
//export const onChangePassword = async (email) => {};

export const onFindPassword = async (email) => {
    return await axios
        .post(AUTH + "/password", { email })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const onFindEmail = async (email) => {
    return await axios
        .get(USER + `/email/is-duplicated?email=${email}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
