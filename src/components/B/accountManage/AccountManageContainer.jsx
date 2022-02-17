import { Box, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./AccountManage.css";

const AccountManageContainer = ({ email }) => {
    email = "asdfasdf";
    return (
        <Box className="account-center-box">
            <Box className="account-container">
                <Box className="sub-container">
                    <h1>계정</h1>
                    <Divider />
                    <Box className="account-info">
                        <Box className="left-box">
                            <p style={{ fontSize: "20px" }}>멤버십 정보</p>
                        </Box>
                        <Box className="right-box">
                            <Box className="flex-box">
                                <h3>{email}</h3>
                                <Link to="">
                                    <p>계정 이메일 변경</p>
                                </Link>
                            </Box>
                            <Box className="flex-box">
                                <h3>********</h3>
                                <Link to="">
                                    <p>비밀번호 변경</p>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AccountManageContainer;
