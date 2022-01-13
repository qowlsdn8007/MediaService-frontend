import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "../hoc/withAuth";
import Slider from "../components/D/D-06 (lolomo-row)/Slider";
import { setMovies } from "../modules/movie";
import Data from "../videoData.json";
import MainHeader from "../components/common/MainHeader";
import axios from "axios";
import ProfileContainer from "../components/C/ProfileContainer";
import { getProfiles } from "../api/profile";

const AfterSignInRouter = () => {
  const { data } = Data;
  const [profileList, setProfileList] = useState([]);
  const chosenProfileId = useSelector((state) => state.profile.profileId);
  const getProfileList = async () => {
    const list = await getProfiles();
    setProfileList(list);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(data));
    getProfileList();
    console.log(`프로필아디: ${chosenProfileId}`);
  }, [dispatch, data, chosenProfileId]);

  return (
    <>
      <MainHeader />
      {chosenProfileId ? <Slider /> : <ProfileContainer list={profileList} />}
    </>
  );
};

export default withAuth(AfterSignInRouter);
