import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { isAuthNumberCorrect } from "api/sign";
import React, { useState } from "react";

const AuthNumChecker = ({ email, setCheck }) => {
    const [signUpKey, setSignUpKey] = useState("");
    const [showErrorText, setShowErrorText] = useState(false);
    const handleChangeNum = (e) => {
        setSignUpKey(e.target.value);
    };

    const handleCheckAuthNum = async ({ email, signUpKey }) => {
        const response = await isAuthNumberCorrect({ email, signUpKey });
        const status = response === 200 ? true : false;
        if (status) {
            setCheck(true);
        } else {
            setShowErrorText(true);
        }
    };
    return (
        <Box>
            <p>메일로 전송된 인증번호를 입력해주세요.</p>
            <Box sx={{ display: "flex" }}>
                <TextField
                    sx={{ width: "100%" }}
                    value={signUpKey}
                    onChange={handleChangeNum}
                />
                <Button
                    sx={{ backgroundColor: "#e50914" }}
                    variant="contained"
                    onClick={() => handleCheckAuthNum({ email, signUpKey })}
                >
                    확인
                </Button>
            </Box>
            {showErrorText && (
                <p style={{ color: "red" }}>인증번호가 일치하지 않습니다.</p>
            )}
        </Box>
    );
};

export default AuthNumChecker;
