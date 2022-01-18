import { Divider } from "@mui/material";
import { setProfileManageType } from "modules/profile";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const EditProfileContainer = () => {
  const dispatch = useDispatch();
  const handleCancel = useCallback(() => {
    dispatch(setProfileManageType("default"));
  }, []);

  return (
    <div>
      <h1>프로필 변경</h1>
      <Divider />
      <div style={{ display: "flex" }}>
        <div>
          <img src="프로필 이미지" alt="프로필 이미지" />
        </div>
        <div>
          <input type="text" />
          <Divider />
          <h3>관람 등급 설정</h3>
        </div>
      </div>
      <Divider />
      <button>저장</button>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
};

export default EditProfileContainer;
