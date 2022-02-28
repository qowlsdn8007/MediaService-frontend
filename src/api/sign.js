import axios from "axios";
import { setCookie } from "./browserStorage";
import { deleteLatestProfile } from "./profile";

const AUTH = "/auth";
const USER = "/users";
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24 hour

export const onSignUp = async (data) => {
    return await axios
        .post(AUTH + "/sign-up", data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const onSignIn = async ({ email, pw }) => {
    const data = { email, password: pw };
    return await axios
        .post(AUTH + "/sign-in", data)
        .then((res) => res.data)
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

export const onFindPassword = async (email) => {
    return await axios
        .post(AUTH + "/password", { email })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const isDuplicatedEmail = async (email) => {
    return await axios
        .get(USER + `/email/is-duplicated?email=${email}`)
        .then((res) => res.data) //  반환값 없으므로  status 반환시키자
        .catch((err) => console.log(err));
};

export const updatePassword = async ({ dstPassword, srcPassword }) => {
    return await axios
        .put(USER + "password", { dstPassword, srcPassword })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const sendEmailForAuthNumber = async ({ email }) => {
    return await axios
        .post(AUTH + "/verify-mail", { email })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const isAuthNumberCorrect = async ({ email, signUpKey }) => {
    return await axios
        .post(AUTH + "/verify-auth")
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
