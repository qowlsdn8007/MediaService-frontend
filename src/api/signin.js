import axios from 'axios';

const AUTH = "/auth";
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24 hour
let defaultAuthHeader = axios.defaults.headers.common['Authorization'];

export const onSignIn = (email, password) => {
    const data = {
        email,
        password,
    };
    axios.post(AUTH + '/sign-in', data).then(res => {
        const { accessToken } = res.data;

        defaultAuthHeader = `Bearer ${accessToken}`;  // header에 항상 디폴트로 accessToken 설정
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
    defaultAuthHeader = `Bearer ${accessToken}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

