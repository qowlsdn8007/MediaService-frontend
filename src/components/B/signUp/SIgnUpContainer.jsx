import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";

const SignUpContainer = () => {
  return (
    <>
      <h1>회원 가입을 진행해주세요</h1>
      <div>
        <TextField id="email" label="이메일 주소" />
      </div>
      <div>
        <TextField id="password" label="비밀번호" />
      </div>
      <div>
        <div>
          <FormControlLabel
            value=""
            label="예 저는 개인정보 처리방침에 동의합니다"
            labelPlacement="end"
            control={<Checkbox />}
          />
        </div>
        <Button variant="contained">동의하고 계속하기</Button>
      </div>
    </>
  );
};

export default SignUpContainer;
