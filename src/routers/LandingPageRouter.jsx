import React from "react";
import { useNavigate } from "react-router-dom";
import LandingHeader from "components/common/LandingHeader";
import LandinagPageContainer from "components/A/LandingPageContainer";

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
      <LandinagPageContainer />
    </>
  );
};

export default LandingPageRouter;
