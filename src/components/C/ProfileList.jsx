import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLatestProfile } from "api/profile";
import { setProfileId } from "modules/profile";
import "./profile.css";

const ProfileList = ({ list }) => {
  const dispatch = useDispatch();
  const handleProfileChosen = useCallback(
    (id) => {
      setLatestProfile(id); // 로컬스토리지에 접속하는 프로필 저장
      dispatch(setProfileId(id)); // redux profileId 갱신
    },
    [dispatch],
  );

  return (
    <ul className="profile-list">
      {list.map((data) => (
        <li
          className="profile-item"
          onClick={() => handleProfileChosen(data.id)}
        >
          <img
            style={{ borderRadius: "1rem" }}
            src={data.main_image}
            alt={data.name}
            key={data.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
