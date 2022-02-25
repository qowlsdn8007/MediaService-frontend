import axios from "axios";
import { getLocalItem, removeLocalItem, setLocalItem } from "./browserStorage";

const PF = "/profiles";

export const getProfile = async (id) => {
    const profile = await axios.get(`/profiles/${id}`).then((res) => res.data);
    return profile;
};

export const getUserProfiles = async () => {
    const profiles = await axios.get(PF + "/sign-in/1").then((res) => res.data);

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

export const createProfile = async (data) => {
    await axios.post(PF + "/", data).then((res) => res.data);
};
