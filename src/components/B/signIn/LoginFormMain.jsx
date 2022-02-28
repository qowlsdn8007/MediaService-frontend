import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onSignIn } from "api/sign";
import { getLocalItem, setCookie, setLocalItem } from "api/browserStorage";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import "./login.css";
import { validateEmail, validatePassword } from "api/validation";
import { useDispatch } from "react-redux";
import { setProfileList } from "modules/profile";
import { useMutation, useQuery } from "react-query";

const LoginFormMain = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [errEmail, setErrEmail] = useState(false);
    const [errPw, setErrPw] = useState(false);
    const [isError, setIsError] = useState("");

    const [autoCheck, setAutoCheck] = useState(
        getLocalItem("autoCheck", false),
    ); // false는 스토리지에 없을 때 기본값

    useEffect(() => {
        if (autoCheck) {
            setLocalItem("autoCheck", true);
        } else {
            setLocalItem("autoCheck", false);
        }
    }, [autoCheck]);

    const handleAutoChecked = () => {
        setAutoCheck(!autoCheck);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail(validateEmail(e.target.value));
    };
    const handleChangePassword = (e) => {
        setPw(e.target.value);
        setErrPw(validatePassword(e.target.value));
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToAfterLogin = () => {
        navigate("/browse");
    };

    const signInMutation = useMutation(onSignIn, {
        onError: (error, variable, context) => {
            // error
            console.log();
            setIsError(error.message);
            //  서버에서 errorcode를 status 200 으로 주고 있다....
        },
        onSuccess: (data, variables, context) => {
            console.log("success", data, variables, context);
            if (data.hasOwnProperty("errorCode")) {
                setIsError(data.message);
            } else {
                axios.defaults.headers["access_token"] = data.accessToken; // access
                setCookie("refresh_token", data.refreshToken.id, 90); // refresh
                dispatch(setProfileList(data.profileList));
                goToAfterLogin();
            }
        },
        onSettled: () => {
            console.log("end");
        },
    });

    const handleSignIn = () => {
        signInMutation.mutate({ email, pw });
    };

    return (
        <Box className="loginform-main">
            <h1 className="text">로그인</h1>
            {isError && (
                <div className="error">
                    <p className="text">{isError}</p>
                </div>
            )}
            <TextField
                className="input"
                color="warning"
                error={errEmail}
                id="email"
                label="이메일 주소"
                value={email}
                onChange={handleChangeEmail}
            />
            {email && errEmail && (
                <p style={{ color: "orange", textAlign: "left" }}>
                    이메일 주소를 양식에 맞게 입력해 주세요.
                </p>
            )}
            <TextField
                className="input"
                color="warning"
                error={errPw}
                type="password"
                id="password"
                label="비밀번호"
                value={pw}
                onChange={handleChangePassword}
            />
            {pw && errPw && (
                <p style={{ color: "orange", textAlign: "left" }}>
                    비밀번호는 8~20 자 사이에 영문을 포함한 문자여야 합니다.
                </p>
            )}
            <button className="button" onClick={handleSignIn}>
                <b className="text">로그인</b>
            </button>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <FormControlLabel
                    className="sub-text"
                    control={<Checkbox defaultChecked sx={{ color: "gray" }} />}
                    label="로그인 정보 저장"
                    checked={autoCheck}
                    onChange={handleAutoChecked}
                />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5vh",
                    }}
                >
                    <Link to="/signinhelp" className="sub-text">
                        도움이 필요하신가요
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginFormMain;
