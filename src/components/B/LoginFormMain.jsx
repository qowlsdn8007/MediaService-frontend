import { useState } from "@storybook/addons";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onSignIn } from "../../api/signin";

const LoginFormMain = () => {
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);

  const navigate = useNavigate();
  const goToAfterLogin = () => {
    if (onSignIn(email, pw)) {
      navigate("/browse");
    }
  };

  return (
    <div className="loginform-main">
      <h1>로그인</h1>
      <div></div>
      <input value={(id) => setEmail(id)}></input>
      <input value={(id) => setPw(pw)}></input>
      <button onClick={goToAfterLogin}>로그인</button>
      <div>
        <input type="checkbox"></input>
        <label>로그인 정보 저장</label>
      </div>
      <Link to="/signinhelp">도움이 필요하신가요</Link>
    </div>
  );
};

export default LoginFormMain;
