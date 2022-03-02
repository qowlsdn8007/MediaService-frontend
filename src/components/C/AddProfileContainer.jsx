import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    TextField,
} from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { createProfile } from "api/profile";
import axios from "axios";
import { setProfileManageType } from "modules/profile";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./AddProfile.css";

const AddProfileContainer = () => {
    const defaultImage =
        "https://images.chosun.com/resizer/vhEbb8NoMdbLntJGo_xrXSWYLb0=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/MUUS6BYH4JIBWKHBZ6327ROQRU.jpg";

    const [profile, setProfile] = useState({
        mainImage: defaultImage,
        name: "",
        rate: "19+",
    });
    const dispatch = useDispatch();

    const handleCancel = useCallback(() => {
        dispatch(setProfileManageType("default"));
    }, []);

    const handleCreateProfile = async () => {
        setProfile({ ...profile, mainImage: defaultImage });
        await createProfile(profile);
        dispatch(setProfileManageType("default"));
    };

    const handleInput = (e) => {
        setProfile({ ...profile, name: e.target.value });
    };
    const handleRate = (e) => {
        let rate = "";
        e.target.checked ? (rate = "7+") : (rate = "19+");
        setProfile({ ...profile, rate });
    };

    return (
        <Box className="addProfile-center-box">
            <Box className="add-container">
                <h1 className="title">프로필 추가</h1>
                <p className="sub-text">
                    넷플릭스를 시청할 다른 사용자를 등록하시려면 프로필을
                    추가하세요.
                </p>
                <Divider className="divider" />
                <div style={{ display: "flex" }}>
                    <div>
                        <img
                            className="image"
                            src={defaultImage}
                            alt="프로필 이미지"
                        />
                    </div>
                    <Box>
                        <input
                            className="input"
                            type="text"
                            value={profile.name}
                            onChange={handleInput}
                        />
                        <FormControlLabel
                            className="checkbox"
                            control={
                                <Checkbox
                                    sx={{ color: "#666" }}
                                    onChange={handleRate}
                                />
                            }
                            label="어린이인가요?"
                        />
                    </Box>
                </div>
                <Divider className="divider" />
                <Box>
                    <button
                        className="profile-button"
                        onClick={handleCreateProfile}
                    >
                        다음
                    </button>
                    <button className="profile-button" onClick={handleCancel}>
                        취소
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default AddProfileContainer;
