import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { flexbox } from "@mui/system";
import { setProfileManageType } from "modules/profile";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const AddProfileContainer = () => {
  const dispatch = useDispatch();
  const handleCancel = useCallback(() => {
    dispatch(setProfileManageType("default"));
  }, []);
  const handleSaveProfile = () => {};

  return (
    <div>
      <h1>프로필 추가</h1>
      <p>넷플릭스를 시청할 다른 사용자를 등록하시려면 프로필을 추가하세요.</p>
      <Divider />
      <div>
        <img src="" alt="" />
        <flexbox>
          <TextField hiddenLabel />
          <FormControlLabel control={<Checkbox />} label="어린이인가요?" />
        </flexbox>
      </div>
      <Button>다음</Button>
      <Button onClick={handleCancel}>취소</Button>
    </div>
  );
};

export default AddProfileContainer;
