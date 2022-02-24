import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLatestProfile } from "api/profile";
import { setProfileId, setProfileManageType } from "modules/profile";
import EditIcon from "@mui/icons-material/Edit";
import "./profile.css";
import { Icon } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProfileList = ({ list, type, onProfileClick }) => {
    const dispatch = useDispatch();
    const mtype = useSelector((state) => state.profile.profileManageType);

    const handleClickAdd = async () => {
        await dispatch(setProfileManageType("add"));
        console.log(mtype);
    }; //  profileManage 컴포넌트   Add로 변경

    return (
        <ul className="profile-list">
            {list.map((data) => (
                <li
                    className="profile-item"
                    onClick={() => onProfileClick(data)}
                >
                    <div>
                        <img
                            style={{ borderRadius: "1rem" }}
                            src={data.main_image}
                            alt={data.name}
                            key={data.name}
                        />
                        {type === "manage" && (
                            <EditIcon className="profile-update" />
                        )}
                    </div>
                </li>
            ))}
            {list.length < 5 && (
                <li className="profile-item" onClick={handleClickAdd}>
                    <div>
                        <AddCircleIcon
                            style={{
                                width: "100%",
                                height: "100%",
                                color: "gray",
                            }}
                        />
                    </div>
                </li>
            )}
        </ul>
    );
};

export default ProfileList;
