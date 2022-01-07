import React from "react";
import { useNavigate } from "react-router-dom";
import LandingHeader from "../common/LandingHeader";

const LandingPageRouter = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/login");
  };
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <LandingHeader />
      <p>랜딩페이지</p>
      <div>
        <input />
        <button onClick={goToSignUp}>시작하기</button>
      </div>
    </>
  );
};

export default LandingPageRouter;
