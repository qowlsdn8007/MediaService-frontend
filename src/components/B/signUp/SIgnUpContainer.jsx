import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react";

const SignUpContainer = () => {
  const [agree, SetAgree] = useState(false);
  const handleChecked = useCallback(() => {
    SetAgree(!agree);
  });
=======
import React from "react";

const SignUpContainer = () => {
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
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
<<<<<<< HEAD
            onChange={handleChecked}
=======
            value=""
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
            label="예 저는 개인정보 처리방침에 동의합니다"
            labelPlacement="end"
            control={<Checkbox />}
          />
        </div>
<<<<<<< HEAD
        <Button variant="contained" disabled={!agree}>
          동의하고 계속하기
        </Button>
=======
        <Button variant="contained">동의하고 계속하기</Button>
>>>>>>> 2228fef33a343399823dddc3ee7d61906ca5972e
      </div>
    </>
  );
};

export default SignUpContainer;
