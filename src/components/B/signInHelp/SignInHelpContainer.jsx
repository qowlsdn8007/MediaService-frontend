import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { validateEmail } from "api/validation";
import React, { useState } from "react";
import "./SignInHelp.css";

const SignInHelpContainer = () => {
    const [emailResponse, setEmailResponse] = useState(null);
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState(false);
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail(validateEmail(e.target.value));
    };
    const handleFindPassword = () => {
        setEmailResponse(true);
    };
    const isError = email && errEmail;

    return (
        <Box className="center-box">
            <Box className="help-container">
                <Box className="sub-container">
                    <p className="title">비밀번호를 잊으셨나요?</p>
                    <p>새로운 비밀버호 안내 이메일을 보내드리겠습니다.</p>
                    <p>이메일 수신 후 설정을 통해 비밀번호를 변경해주세요.</p>
                    <div>
                        <input
                            className={"input" + (isError ? " error" : "")}
                            placeholder="name@example.com"
                            onChange={handleChangeEmail}
                            value={email}
                        ></input>
                        {isError && (
                            <p style={{ color: "red" }}>
                                정확한 이메일 주소를 입력하세요.
                            </p>
                        )}
                        <div>
                            <button
                                className="button"
                                onClick={handleFindPassword}
                            >
                                이메일로 받기
                            </button>
                        </div>
                        {emailResponse &&
                            (email ? (
                                <p style={{ color: "green" }}>
                                    새 비밀번호가 전송되었습니다. 메일을
                                    확인해주세요.
                                </p>
                            ) : (
                                <p style={{ color: "red" }}>
                                    존재하지 않는 이메일입니다.
                                </p>
                            ))}
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default SignInHelpContainer;
