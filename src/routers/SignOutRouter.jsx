import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignOutContainer from "components/B/signOut/SignOutContainer";
import LandingHeader from "components/common/LandingHeader";
const SignOutRouter = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };
    const setTime = 30000;
    let timer;
    const handleGoToHome = () => {
        clearTimeout(timer);
        goToHome();
    };

    useEffect(() => {
        timer = (() => setTimeout(goToHome, setTime))(); // checkTime 값은 이 페이지 벗어나면 초기화 되어야함
    }, []);

    return (
        <>
            <LandingHeader />
            <SignOutContainer goToHome={handleGoToHome} />
        </>
    );
};
export default SignOutRouter;
