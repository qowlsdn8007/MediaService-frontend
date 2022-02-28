import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "./errorPage.css";
const errorData = {
    mainText: "서비스 이용에 불편을 드려 죄송합니다",
    subText: "죄송합니다. 지금은 요청을 처리할 수 없습니다.",
    background: "error-container",
};
const notFoundData = {
    mainText: "서비스 이용에 불편을 드려 죄송합니다",
    subText:
        "죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해 다양한 콘텐츠를 만나보세요.",
    background: "notfound-container",
};

const ErrorPage = () => {
    const navigate = useNavigate();
    const status = 500;
    const goToHome = () => {
        navigate("/");
    };

    const errorText = status === 500 ? notFoundData : errorData;
    return (
        <Box className={errorText.background}>
            <Box className="error-subcontainer">
                <h1 className="error-head">{errorText.mainText}</h1>
                <p className="error-text">{errorText.subText}</p>
                <Box>
                    <button className="error-button" onClick={goToHome}>
                        Tmax 홈
                    </button>
                </Box>
                <Box>
                    <span>오류코드: </span>
                </Box>
            </Box>
        </Box>
    );
};

export default ErrorPage;
