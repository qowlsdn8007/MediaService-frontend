import React from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/B/LoginContainer";

const BeforeLoginRouter = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <LoginContainer />
      </div>
    </>
  );
};

export default BeforeLoginRouter;
