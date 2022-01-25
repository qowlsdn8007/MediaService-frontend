import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
<<<<<<< HEAD
import React, { useState } from "react";

const SignInHelpContainer = () => {
  const [emailResponse, setEmailResponse] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
  const handleFIndPassword = () => {};

=======
import React from "react";

const SignInHelpContainer = () => {
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
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
<<<<<<< HEAD
          <Button variant="contained" onClick={handleFIndPassword}>
            이메일로 받기
          </Button>
        </div>
        {emailResponse &&
          (isEmail ? (
            <b style={{ color: "green" }}>
              새 비밀번호가 전송되었습니다. 메일을 확인해주세요.
            </b>
          ) : (
            <b style={{ color: "red" }}>존재하지 않는 이메일입니다.</b>
          ))}
=======
          <Button variant="contained">이메일로 받기</Button>
        </div>
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
      </div>
    </Box>
  );
};

export default SignInHelpContainer;
