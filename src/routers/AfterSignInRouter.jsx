import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "hoc/withAuth";
import Slider from "components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "modules/movie";
import Data from "videoData.json";
import MainHeader from "components/common/MainHeader";
import ProfileContainer from "components/C/ProfileContainer";
import { getProfile, getProfiles, setLatestProfile } from "api/profile";
import PreviewModal from "components/D/D-08 (preview-modal)/PreviewModal";
import { setPreviewModalOpen } from "modules/uiControl";
import { setProfile } from "modules/profile";

const AfterSignInRouter = ({ isNotFounded }) => {
    const { data } = Data;
    const [profileList, setProfileList] = useState([]);
    const dispatch = useDispatch();
    const handleProfileChosen = useCallback(
        (profile) => {
            setLatestProfile(profile.id); // 로컬스토리지에 접속하는 프로필 저장
            dispatch(setProfile(profile)); // redux profile 갱신
        },
        [dispatch],
    );
    const chosenProfile = useSelector((state) => state.profile.currentProfile);
    const getProfileList = async () => {
        const list = await getProfiles();
        setProfileList(list);
    };

    useEffect(() => {
        dispatch(setMovies(data));
        getProfileList();
    }, [dispatch, data]);

    return (
        <>
            <MainHeader />
            {chosenProfile ? (
                <div>
                    <Slider />
                    <PreviewModal />
                </div>
            ) : (
                <ProfileContainer
                    list={profileList}
                    title="티맥스를 시청할 프로필을 선택하세요."
                    btnName="프로필 관리"
                    onClick={handleProfileChosen}
                />
            )}
        </>
    );
};

export default withAuth(AfterSignInRouter);
