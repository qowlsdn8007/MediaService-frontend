import React from "react";
import { Link } from 'react-router-dom';

const LoginFormMain = () => {
  return (
    <div className="loginform-main">
      <h1>로그인</h1>
      <div></div>
      <input></input>
      <input></input>
      <button></button>
      <div>
        <input type="checkbox"></input>
        <label>로그인 정보 저장</label>
      </div>
      <Link to="/signinhelp">도움이 필요하신가요</Link>
    </div>
  );
};

export default LoginFormMain;
