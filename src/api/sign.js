import axios from 'axios';
import { getCookie, getLocalItem, setCookie, setLocalItem } from './browserStorage';

const AUTH = "/auth";
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24 hour

export const onSignIn = async (email, password) => {
    const data = {
        email,
        password,
    };
    await axios.post(AUTH + '/sign-in', data).then(res => {
        const { accessToken } = res.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;  // header에 항상 디폴트로 accessToken 설정
    }).catch(err => {
        console.log(err);
        // ERROR 컴포넌트를 보여주든 어찌든 후에 꼭 처리 로직 작성
    });
}

export const onSilentRefresh = () => {
    axios.post(AUTH + '/silent-refresh')
    .then(onLoginSuccess)
    .catch(err => {
        console.log(err);
        //로직 작성
    })
}

const onLoginSuccess = res => {
    const { accessToken } = res.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

export const onSignOut = () => {
    axios.defaults.headers.common['Authorization'] = ""; // accessToken 초기화
    setCookie('refreshToken',"", "-1"); // refreshToken 삭제
}

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