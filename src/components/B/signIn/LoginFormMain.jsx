import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onSignIn } from "api/sign";
import { getLocalItem, setLocalItem } from "api/browserStorage";
const LoginFormMain = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [autoCheck, setAutoCheck] = useState(getLocalItem("autoCheck", false)); // false는 스토리지에 없을 때 기본값

  useEffect(() => {
    if (autoCheck) {
      setLocalItem("autoCheck", true);
    } else {
      setLocalItem("autoCheck", false);
    }
  }, [autoCheck]);

  const handleAutoChecked = () => {
    setAutoCheck(!autoCheck);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPw(e.target.value);
  };

  const navigate = useNavigate();
  const goToAfterLogin = () => {
    onSignIn(email, pw).then(() => {
      if (axios.defaults.headers.common["Authorization"]) {
        navigate("/browse");
      }
    });
  };

  return (
    <div className="loginform-main">
      <h1>로그인</h1>
      <div></div>
      <input value={email} onChange={handleChangeEmail}></input>
      <input value={pw} onChange={handleChangePassword}></input>
      <button onClick={goToAfterLogin}>로그인</button>
      <div>
        <input
          type="checkbox"
          checked={autoCheck}
          onChange={handleAutoChecked}
        ></input>
        <label>로그인 정보 저장</label>
      </div>
      <Link to="/signinhelp">도움이 필요하신가요</Link>
    </div>
  );
};

export default LoginFormMain;
