import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "hoc/withAuth";
import Slider from "components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "modules/movie";
import Data from "videoData.json";
import ProfileContainer from "components/C/ProfileContainer";
import { getUserProfiles, setLatestProfile } from "api/profile";
import PreviewModal from "components/D/D-08 (preview-modal)/PreviewModal";
import { setBackground } from "modules/uiControl";
import { setProfile } from "modules/profile";
import { useNavigate } from "react-router-dom";
import MainContainer from "components/D/MainContainer";

const AfterSignInRouter = () => {
    const { data } = Data;
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
        const list = await getUserProfiles();
    };

    useEffect(() => {
        dispatch(setMovies(data));
        getProfileList();
    }, [dispatch, data]);

    const navigate = useNavigate();
    const goToManageProfile = () => {
        navigate("/manageProfile");
    };

    dispatch(setBackground("dark-container"));

    return (
        <>
            {chosenProfile ? (
                <MainContainer />
            ) : (
                <ProfileContainer
                    title="티맥스를 시청할 프로필을 선택하세요."
                    btnName="프로필 관리"
                    onProfileClick={handleProfileChosen}
                    onButtonClick={goToManageProfile}
                />
            )}
        </>
    );
};

export default withAuth(AfterSignInRouter);
