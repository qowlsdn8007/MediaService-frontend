import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AccountManageContainer = ({ email }) => {
  email = "asdfasdf";
  return (
    <>
      <h1>계정</h1>
      <Divider />
      <div style={{ display: "flex" }}>
        <div>
          <h2>멤버십 정보</h2>
        </div>
        <div>
          <div>
            <div>
              <b>{email}</b> <Link to>계정 이메일 변경</Link>
            </div>
            <div>
              <span>비밀번호: ********</span> <Link to>비밀번호 변경</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManageContainer;
