import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "CI_TmaxEnterprise.png";
import { Button } from "@mui/material";

const LandingHeader = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <div>
      <img src={logo} width="20%" alt="logo" />
      <Button
        variant="contained"
        style={{ backgroundColor: "red" }}
        onClick={goToSignIn}
      >
        로그인
      </Button>
    </div>
  );
};

export default LandingHeader;
