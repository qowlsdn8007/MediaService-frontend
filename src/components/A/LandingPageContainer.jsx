import { Button, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { validateEmail } from "api/validation";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { isDuplicatedEmail, sendEmailForAuthNumber } from "api/sign";
import {
    setBackground,
    setHeaderBg,
    setHeaderRightNode,
} from "modules/uiControl";
import { useDispatch } from "react-redux";
import "./LandingPageContainer.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoginButton from "components/common/LoginButton";
import { getCookie } from "api/browserStorage";
import axios from "axios";

const LandinagPageContainer = () => {
    const [email, setEmail] = useState("");
    const [errText, setErrText] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBackground("landing-container"));
        dispatch(setHeaderRightNode(<LoginButton />));
    }, []);

    const goToSignIn = useCallback(() => {
        navigate("/signin");
    }, [navigate]);

    const goToSignUp = useCallback(
        async (email) => {
            await sendEmailForAuthNumber({ email }).then((res) =>
                console.log(res),
            );
            navigate("/signup", { state: email });
        },
        [navigate],
    );

    const handleEmail = (text) => {
        setEmail(text);
        setErrText(validateEmail(text));
    };

    const handleStart = useCallback(
        async (email) => {
            email &&
                !errText &&
                (await isDuplicatedEmail(email).then((res) =>
                    res ? goToSignIn() : goToSignUp(email),
                ));
        },
        [errText, goToSignIn, goToSignUp],
    );

    axios.interceptors.request.use(function (request) {
        if (!request.headers.access_token) {
            request.headers.refresh_token = getCookie("refresh_token");
        }
    });
    axios.interceptors.response.use(function (response) {
        if (response.headers.access_token) {
            axios.defaults.headers.access_token = response.headers.access_token;
            delete axios.defaults.headers.refresh_token;
        }
    });

    return (
        <Box>
            <Box className="content-box">
                <h1 className="text">TMAX의 모든 콘텐츠를 무제한으로.</h1>
                <p className="text">
                    시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면
                    이메일 주소를 입력하세요.
                </p>
                <Box className="input-box">
                    <TextField
                        className="input"
                        error={errText}
                        id="email"
                        variant="filled"
                        label="이메일 주소"
                        onChange={(e) => handleEmail(e.target.value)}
                        onKeyPress={(e) =>
                            e.key === "Enter" && handleEmail(e.target.value)
                        }
                    />
                    <Button
                        className="button"
                        variant="contained"
                        style={{ backgroundColor: "#e50914" }}
                        onClick={() => handleStart(email)}
                        onKeyPress={(e) =>
                            e.key === "Enter" && console.log(e.key)
                        }
                    >
                        <span>시작하기</span>
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>
                {email && errText && (
                    <p
                        style={{
                            color: "orange",
                            backgroundColor: "transparent",
                        }}
                    >
                        이메일 주소를 양식에 맞게 입력해 주세요.
                    </p>
                )}
            </Box>
        </Box>
    );
};

export default LandinagPageContainer;
