import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { validateEmail, validatePassword } from "api/validation";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthNumChecker from "./AuthNumChecker";

const SignUpContainer = () => {
    const [agree, SetAgree] = useState(false);
    const handleChecked = useCallback(() => {
        SetAgree(!agree);
    }, [agree]);
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState(false);
    const [pw, setPw] = useState("");
    const [errPw, setErrPw] = useState(false);
    const [checkAuthNum, setCheckAuthNum] = useState(false);
    const { state } = useLocation(); //  랜딩페이지에서 전달받은 이메일

    useEffect(() => {
        state && setEmail(state);
    }, [state]);

    const handleEmail = useCallback(
        (text) => {
            setEmail(text);
            setErrEmail(validateEmail(text));
        },
        [setEmail, setErrEmail],
    );

    const handlePw = useCallback(
        (text) => {
            setPw(text);
            setErrPw(validatePassword(text));
        },
        [setPw, setErrPw],
    );

    const handleAgree = () => {
        setCheckAuthNum(true);
    };

    const enableAgree = pw && agree && !errEmail && !errPw;

    return (
        <>
            <h1>회원 가입을 진행해주세요</h1>
            <div>
                <TextField
                    error={errEmail}
                    id="email"
                    label="이메일 주소"
                    value={email}
                    onChange={(e) => handleEmail(e.target.value)}
                    helperText={
                        email &&
                        errEmail && (
                            <p style={{ color: "orange" }}>
                                이메일 주소를 양식에 맞게 입력해 주세요.
                            </p>
                        )
                    }
                />
            </div>
            <div>
                <TextField
                    error={errPw}
                    type="password"
                    id="password"
                    label="비밀번호"
                    value={pw}
                    onChange={(e) => handlePw(e.target.value)}
                    helperText={
                        pw &&
                        errPw && (
                            <p style={{ color: "orange" }}>
                                비밀번호는 8~20 자 사이에 영문을 포함한 문자여야
                                합니다.
                            </p>
                        )
                    }
                />
            </div>
            <div>
                <div>
                    <FormControlLabel
                        onChange={handleChecked}
                        label="예 저는 개인정보 처리방침에 동의합니다"
                        labelPlacement="end"
                        control={<Checkbox />}
                    />
                </div>
                <Button
                    variant="contained"
                    disabled={!enableAgree}
                    onClick={handleAgree}
                >
                    동의하고 계속하기
                </Button>
                {checkAuthNum && <AuthNumChecker />}
            </div>
        </>
    );
};

export default SignUpContainer;
