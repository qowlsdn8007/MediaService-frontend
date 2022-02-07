import { Button, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { validateEmail } from "api/validation";
import { useNavigate } from "react-router-dom";
import { emailCheck } from "api/sign";

const LandinagPageContainer = () => {
  const [email, setEmail] = useState("");
  const [errText, setErrText] = useState(false);

  const navigate = useNavigate();

  const goToSignIn = useCallback(() => {
    navigate("/signin");
  }, [navigate]);
 
  const goToSignUp = useCallback(email => {
    return navigate("/signup", {state: email});
  },[navigate]);

  const handleEmail = (text) => {
    setEmail(text);
    setErrText(validateEmail(text));
  };

  const handleStart = useCallback(
    async (email) => {
      email &&
        !errText &&
        (await emailCheck(email).then((res) =>
          res ? goToSignIn() : goToSignUp(email),
        ));
    },
    [errText, goToSignIn, goToSignUp],
  );

  return (
    <>
      <h1>TMAX의 모든 콘텐츠를 무제한으로.</h1>
      <p>
        <b>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </b>
      </p>
      <div>
        <TextField
          error={errText}
          id="email"
          variant="filled"
          label="이메일 주소"
          onChange={(e) => handleEmail(e.target.value)}
          helperText={
            email &&
            errText && (
              <p style={{ color: "orange" }}>
                이메일 주소를 양식에 맞게 입력해 주세요.
              </p>
            )
          }
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "red" }}
          onClick={() => handleStart(email)}
        >
          시작하기
        </Button>
      </div>
    </>
  );
};

export default LandinagPageContainer;
