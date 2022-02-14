import React from "react";
import { Link } from "react-router-dom";

const LoginFormOther = () => {
    return (
        <div>
            <div className="sub-text" style={{ textAlign: "left" }}>
                소셜 로그인
            </div>
            <div className="sub-text" style={{ textAlign: "left" }}>
                TMAX 회원이 아닌가요?{" "}
                <Link to={"/"} style={{ color: "white" }}>
                    <b>지금 가입하세요</b>
                </Link>
            </div>
            <div>리캡챠</div>
        </div>
    );
};

export default LoginFormOther;
