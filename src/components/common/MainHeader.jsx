import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../CI_TmaxEnterprise.png";
import { onSignOut } from "../../api/sign";

const MainHeader = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/browse");
  };
  const goToSignOut = () => {
    navigate("/signout");
  };
  const handleSignOut = () => {
    onSignOut();
    goToSignOut();
  };

  return (
    <div>
      <img src={logo} width="20%" alt="logo" onClick={goToMain} />
      <button onClick={handleSignOut}>로그아웃</button>
    </div>
  );
};

export default MainHeader;
