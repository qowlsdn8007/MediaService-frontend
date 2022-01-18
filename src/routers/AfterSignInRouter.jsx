import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "../hoc/withAuth";
import Slider from "../components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "../modules/movie";
import Data from "../videoData.json";
import MainHeader from "../components/common/MainHeader";
import ProfileContainer from "../components/C/ProfileContainer";
import { getProfiles } from "../api/profile";
import PreviewModal from "../components/D/D-08 (preview-modal)/PreviewModal";
import { setPreviewModalOpen } from "../modules/uiControl";

const AfterSignInRouter = ({ isNotFounded }) => {
  const { data } = Data;
  const [profileList, setProfileList] = useState([]);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setPreviewModalOpen(true));
  };

  const chosenProfileId = useSelector((state) => state.profile.profileId);
  const getProfileList = async () => {
    const list = await getProfiles();
    setProfileList(list);
  };

  useEffect(() => {
    dispatch(setMovies(data));
    getProfileList();
    console.log(`프로필아디: ${chosenProfileId}`);
  }, [dispatch, data, chosenProfileId]);

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
        <ProfileContainer list={profileList} />
      )}
    </>
  );
};

export default withAuth(AfterSignInRouter);
