import React from "react";
import ProfileList from "./ProfileList";

const ProfileContainer = ({ title, list, type, btnName, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ProfileList list={list} type={type} onClick={onClick} />
      <button>{btnName}</button>
    </div>
  );
};

export default ProfileContainer;
