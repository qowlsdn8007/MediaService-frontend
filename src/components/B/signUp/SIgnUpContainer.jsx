import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { validateEmail, validatePassword } from "api/validation";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SignUpContainer = () => {
  const [agree, SetAgree] = useState(false);
  const handleChecked = useCallback(() => {
    SetAgree(!agree);
  });
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [pw, setPw] = useState("");
  const [errPw, setErrPw] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    state && setEmail(state);
    console.log(state);
  }, [state]);

  const handleEmail = useCallback((text) => {
    setEmail(text);
    setErrEmail(validateEmail(text));
  }, []);
  const handlePw = useCallback((text) => {
    setPw(text);
    setErrPw(validatePassword(text));
  }, []);

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
                비밀번호는 8~20 자 사이에 영문을 포함한 문자여야 합니다.
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
        <Button variant="contained" disabled={!agree || errEmail || errPw}>
          동의하고 계속하기
        </Button>
      </div>
    </>
  );
};

export default SignUpContainer;
