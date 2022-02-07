import { Button, TextField } from "@mui/material";
import React from "react";

const AuthNumChecker = () => {
  const handleCheckAuthNum = async () => {
    // await 인증확인요청
  };
  return (
    <>
      <p>인증번호를 입력해주세요.</p>
      <TextField />
      <Button variant="contained" onClick={handleCheckAuthNum}>
        확인
      </Button>
    </>
  );
};

export default AuthNumChecker;
