import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate();
    const goToSignIn = () => {
        navigate("/signin");
    };

    return (
        <Button
            variant="contained"
            style={{ backgroundColor: "#e50914" }}
            onClick={goToSignIn}
        >
            로그인
        </Button>
    );
};

export default LoginButton;
