import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfiles, setLatestProfile } from "api/profile";
import { setProfileId, setProfileManageType } from "modules/profile";
import EditIcon from "@mui/icons-material/Edit";
import "./profile.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useQuery } from "react-query";
import Loading from "components/common/Loading";
import ErrorPage from "routers/ErrorPage";

const ProfileList = ({ type, onProfileClick }) => {
    const { isLoading, error, data } = useQuery("profileList", getUserProfiles);

    const dispatch = useDispatch();
    const mtype = useSelector((state) => state.profile.profileManageType);

    const handleClickAdd = async () => {
        await dispatch(setProfileManageType("add"));
        console.log(mtype);
    }; //  profileManage 컴포넌트   Add로 변경

    if (isLoading) return <Loading />;

    if (error) return <ErrorPage />;

    return (
        <ul className="profile-list">
            {data &&
                data.map((profile) => (
                    <li
                        className="profile-item"
                        onClick={() => onProfileClick(profile)}
                    >
                        <div>
                            <img
                                style={{ borderRadius: "1rem" }}
                                src={profile.mainImage}
                                alt={profile.name}
                                key={profile.id}
                            />
                            {type === "manage" && (
                                <EditIcon className="profile-update" />
                            )}
                        </div>
                    </li>
                ))}
            {data.length < 5 && (
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
