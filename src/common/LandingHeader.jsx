import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../CI_TmaxEnterprise.png";

const LandingHeader = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToSignIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <img src={logo} width="20%" alt="logo" />
      <button onClick={goToSignIn}>로그인</button>
    </div>
  );
};

export default LandingHeader;
