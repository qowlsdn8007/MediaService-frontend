import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/B/LoginContainer";

const BeforeLoginRouter = () => {
  const navigate = useNavigate();
  const accessToken = axios.defaults.headers.common["Authorization"];
  useEffect(() => {
    if (accessToken) {
      navigate("/browse");
    }
  }, []);

  return (
    <>
      <div>
        <LoginContainer />
      </div>
    </>
  );
};

export default BeforeLoginRouter;
