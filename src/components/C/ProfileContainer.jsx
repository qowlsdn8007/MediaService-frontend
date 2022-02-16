import React from "react";
import ProfileList from "./ProfileList";
import "./profile.css";

const ProfileContainer = ({
    title,
    list,
    type,
    btnName,
    onProfileClick,
    onButtonClick,
}) => {
    return (
        <div>
            <h1 className="text">{title}</h1>
            <ProfileList
                list={list}
                type={type}
                onProfileClick={onProfileClick}
            />
            <button onClick={onButtonClick} className="profile-button">
                {btnName}
            </button>
        </div>
    );
};

export default ProfileContainer;
