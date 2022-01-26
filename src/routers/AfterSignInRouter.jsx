import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "hoc/withAuth";
import Slider from "components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "modules/movie";
import Data from "videoData.json";
import MainHeader from "components/common/MainHeader";
import ProfileContainer from "components/C/ProfileContainer";
import { getProfiles, setLatestProfile } from "api/profile";
import PreviewModal from "components/D/D-08 (preview-modal)/PreviewModal";
import { setPreviewModalOpen } from "modules/uiControl";
import { setProfileId } from "modules/profile";

const AfterSignInRouter = ({ isNotFounded }) => {
  const { data } = Data;
  const [profileList, setProfileList] = useState([]);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setPreviewModalOpen(true));
  };

  const handleProfileChosen = useCallback(
    (id) => {
      setLatestProfile(id); // 로컬스토리지에 접속하는 프로필 저장
      dispatch(setProfileId(id)); // redux profileId 갱신
    },
    [dispatch],
  );
  const chosenProfileId = useSelector((state) => state.profile.profileId);
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
      {chosenProfileId ? (
        <div>
          <Slider />
          <button onClick={handleOpen}>test</button>
          <PreviewModal />
        </div>
      ) : (
        <ProfileContainer
          list={profileList}
          title="넷플릭스를 시청할 프로필을 선택하세요."
          btnName="프로필 관리"
          onClick={handleProfileChosen}
        />
      )}
    </>
  );
};

export default withAuth(AfterSignInRouter);
