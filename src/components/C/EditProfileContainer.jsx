import { Divider, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { setProfileManageType } from "modules/profile";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./EditProfile.css";

const EditProfileContainer = () => {
    const [age, setAge] = useState("19+");
    const ageGrade = ["7+", "15+", "19+"];
    const dispatch = useDispatch();
    const handleCancel = useCallback(() => {
        dispatch(setProfileManageType("default"));
    }, []);

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <Box className="editprofile-center-box">
            <Box className="edit-container">
                <h1 className="title">프로필 변경</h1>
                <Divider className="divider" />
                <div style={{ display: "flex" }}>
                    <div>
                        <img
                            className="image"
                            src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbjbcaILd-GMEENSsTfeawbBPWzzai65yPT4WBBj6ZjcPlXXIKqBJl0TkdItsaJGtPKSDC5RJ4bv_---JV-K5umdUtOk.png?r=6c2"
                            alt="프로필 이미지"
                        />
                    </div>
                    <div className="sub-container">
                        <input className="input" type="text" />
                        <Divider className="divider" />
                        <p className="sub-text">관람 등급 설정:</p>
                        <Select
                            sx={{ backgroundColor: "#333", color: "white" }}
                            value={age}
                            onChange={handleAgeChange}
                        >
                            {ageGrade.map((age) => (
                                <MenuItem value={age}>{age}</MenuItem>
                            ))}
                        </Select>
                        <p className="text">
                            이 프로필에서는 <b>{age}</b>의 콘텐츠가 표시됩니다.
                        </p>
                    </div>
                </div>
                <Divider className="divider" />
                <Box>
                    <button className="profile-button">저장</button>
                    <button className="profile-button" onClick={handleCancel}>
                        취소
                    </button>
                    <button className="profile-button">프로필 삭제</button>
                </Box>
            </Box>
        </Box>
    );
};

export default EditProfileContainer;
