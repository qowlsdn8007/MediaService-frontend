import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SignInHelpContainer = () => {
  return (
    <Box>
      <h1>비밀번호를 잊으셨나요?</h1>
      <p>새로운 비밀버호 안내 이메일을 보내드리겠습니다.</p>
      <p>이메일 수신 후 설정을 통해 비밀번호를 변경해주세요.</p>
      <div>
        <div>
          <TextField placeholder="example@example.com" />
        </div>
        <div>
          <Button variant="contained">이메일로 받기</Button>
        </div>
      </div>
    </Box>
  );
};

export default SignInHelpContainer;
