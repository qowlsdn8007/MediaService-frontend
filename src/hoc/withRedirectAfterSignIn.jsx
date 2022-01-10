import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const withRedirectAfterSignIn = (Component) => (props) => {
  const navigate = useNavigate();
  const accessToken = axios.defaults.headers.common["Authorization"];
  useEffect(() => {
    if (accessToken) {
      navigate("/browse");
    }
  }, []);
  return <Component {...props} />;
};
export default withRedirectAfterSignIn;
