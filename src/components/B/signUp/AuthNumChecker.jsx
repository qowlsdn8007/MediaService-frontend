import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AuthNumChecker = ({ checkNum, setCheck }) => {
    const [num, setNum] = useState("");
    const handleChangeNum = (e) => {
        setNum(e.target.value);
    };
    return (
        <Box>
            <p>메일로 전송된 인증번호를 입력해주세요.</p>
            <Box sx={{ display: "flex" }}>
                <TextField
                    sx={{ width: "100%" }}
                    value={num}
                    onChange={handleChangeNum}
                />
                <Button
                    sx={{ backgroundColor: "#e50914" }}
                    variant="contained"
                    onClick={() => checkNum(num)}
                >
                    확인
                </Button>
            </Box>
        </Box>
    );
};

export default AuthNumChecker;
