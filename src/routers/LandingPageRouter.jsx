import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingHeader from "../components/common/LandingHeader";
import { withAuth } from "../hoc/withAuth";

const LandingPageRouter = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
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

export default withAuth(LandingPageRouter);
