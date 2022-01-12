import { useEffect } from "@storybook/addons";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutContainer = ({ goToHome }) => {
  return (
    <div>
      <p>
        참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는 없습니다. 공용
        컴퓨터에서 이용한 경우에만 로그아웃하시면 됩니다. 30초 후
        Netflix.com으로 이동합니다.
      </p>
      <button onClick={goToHome}>지금 이동</button>
    </div>
  );
};

export default SignOutContainer;
