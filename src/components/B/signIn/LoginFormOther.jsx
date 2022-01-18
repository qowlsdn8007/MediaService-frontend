import React from "react";
import { Link } from "react-router-dom";

const LoginFormOther = () => {
  return (
    <div>
      <div>소셜 로그인</div>
      <div>
        tMAX 회원이 아닌가요? <Link to={"/"}>지금 가입하세요</Link>
      </div>
      <div>리캡챠</div>
    </div>
  );
};

export default LoginFormOther;
