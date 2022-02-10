import axios from "axios";
import { getLocalItem, removeLocalItem, setLocalItem } from "./browserStorage";

export const getProfile = async (id) => {
  const profile = await axios.get(`/profiles/${id}`).then((res) => res.data);
  return profile;
};

export const getProfiles = async () => {
  const profiles = await axios
    .get("/profiles/sign-in/1")
    .then((res) => res.data);

  return profiles;
};

export const setLatestProfile = (id) => {
  setLocalItem("profileId", id);
};

export const deleteLatestProfile = () => {
  removeLocalItem("profileId");
};

export const getLatestProfileId = () => {
  const pid = getLocalItem("profileId", "");
  return pid;
};
