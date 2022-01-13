import React from "react";
import ProfileList from "./ProfileList";

const ProfileContainer = ({ list }) => {
  return (
    <div>
      <h1>넷플릭스를 시청할 프로필을 선택하세요.</h1>
      <ProfileList list={list} />
      <button>프로필 관리</button>
    </div>
  );
};

export default ProfileContainer;
