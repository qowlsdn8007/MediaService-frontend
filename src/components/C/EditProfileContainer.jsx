import { Divider, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { deleteProfile, getProfile, updateProfile } from "api/profile";
import Loading from "components/common/Loading";
import { setProfileForEditImage, setProfileManageType } from "modules/profile";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "routers/ErrorPage";
import "./EditProfile.css";

const EditProfileContainer = () => {
    const profileEdit = useSelector((state) => state.profile.profileForEdit);
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery("getProfile", () =>
        getProfile(profileEdit.id),
    );

    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const rates = ["7+", "15+", "19+"];

    useEffect(() => {
        data && setName(data.name);
        data && setRate(data.rate);
    }, [data]);

    const handleChangeImage = (imageUrl) => {
        dispatch(setProfileForEditImage(imageUrl));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeRate = (e) => {
        setRate(e.target.value);
    };

    const goBack = () => {
        dispatch(setProfileManageType("default"));
    };

    const handleCancel = useCallback(() => {
        goBack();
    }, []);

    const handleDeleteProfile = async () => {
        await deleteProfile(data.id);
        window.alert("삭제되었습니다.");
        goBack();
    };

    const handleUpdateProfile = async () => {
        const profile = {
            mainImage: profileEdit.mainImage,
            name: name,
            rate: rate,
        };
        const id = profileEdit.id;
        await updateProfile(profile, id);
        goBack();
    };

    if (isLoading) return <Loading />;
    if (error) return <ErrorPage />;
    return (
        <Box className="editprofile-center-box">
            <Box className="edit-container">
                <h1 className="title">프로필 변경</h1>
                <Divider className="divider" />
                <div style={{ display: "flex" }}>
                    <div>
                        <img
                            className="image"
                            src={data.mainImage}
                            alt="프로필 이미지"
                        />
                    </div>
                    <div className="sub-container">
                        <input
                            className="input"
                            value={name}
                            onChange={handleChangeName}
                            type="text"
                        />
                        <Divider className="divider" />
                        <p className="sub-text">관람 등급 설정:</p>
                        <Select
                            sx={{ backgroundColor: "#333", color: "white" }}
                            value={rate}
                            onChange={handleChangeRate}
                        >
                            {rates.map((rate) => (
                                <MenuItem value={rate}>{rate}</MenuItem>
                            ))}
                        </Select>
                        <p className="text">
                            이 프로필에서는 <b>{rate}</b>의 콘텐츠가 표시됩니다.
                        </p>
                    </div>
                </div>
                <Divider className="divider" />
                <Box>
                    <button
                        className="profile-button"
                        onClick={handleUpdateProfile}
                    >
                        저장
                    </button>
                    <button className="profile-button" onClick={handleCancel}>
                        취소
                    </button>
                    <button
                        className="profile-button"
                        onClick={handleDeleteProfile}
                    >
                        프로필 삭제
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default EditProfileContainer;
