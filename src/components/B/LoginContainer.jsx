import React from "react";
import LoginFormMain from "./LoginFormMain";
import LoginFormOther from "./LoginFormOther";

const LoginContainer = () => {
  return (
    <div className="container">
      <LoginFormMain />
      <LoginFormOther />
    </div>
  );
};

export default LoginContainer;
