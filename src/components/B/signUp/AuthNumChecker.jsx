import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AuthNumChecker = () => {
    const handleCheckAuthNum = async () => {
        // await 인증확인요청
    };
    return (
        <Box>
            <p>인증번호를 입력해주세요.</p>
            <Box sx={{ display: "flex" }}>
                <TextField sx={{ width: "100%" }} />
                <Button
                    sx={{ backgroundColor: "#e50914" }}
                    variant="contained"
                    onClick={handleCheckAuthNum}
                >
                    확인
                </Button>
            </Box>
        </Box>
    );
};

export default AuthNumChecker;
