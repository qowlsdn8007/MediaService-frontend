import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLatestProfile } from "api/profile";
import { setProfileId, setProfileManageType } from "modules/profile";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./profile.css";
import { Icon } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ProfileList = ({ list, type, onClick }) => {
  const dispatch = useDispatch();
  const mtype = useSelector((state) => state.profile.profileManageType);

  const handleClickAdd = () => {
    dispatch(setProfileManageType("add"));
    console.log(mtype);
  }; //  profileManage 컴포넌트   Add로 변경

  return (
    <ul className="profile-list">
      {list.map((data) => (
        <li className="profile-item" onClick={() => onClick(data.id)}>
          <div>
            <img
              style={{ borderRadius: "1rem" }}
              src={data.main_image}
              alt={data.name}
              key={data.name}
            />
            {type === "manage" && (
              <BorderColorIcon className="profile-update" />
            )}
          </div>
        </li>
      ))}
      {list.length < 5 && (
        <li className="profile-item" onClick={handleClickAdd}>
          <div>
            <AddCircleOutlineIcon style={{ width: "100%", height: "100%" }} />
          </div>
        </li>
      )}
    </ul>
  );
};

export default ProfileList;
