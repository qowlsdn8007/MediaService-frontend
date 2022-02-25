import axios from "axios";
import { getLocalItem, removeLocalItem, setLocalItem } from "./browserStorage";

const PF = "/profiles";
const USER = "/users";

export const getProfile = async (id) => {
    return await axios
        .get(PF + `/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getUserProfiles = async () => {
    return await axios
        .get(USER + "/profiles")
        .then((res) => res.data)
        .catch((err) => console.log(err));
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

export const createProfile = async ({ mainImage, name, rate }) => {
    const profile = { mainImage, name, rate };
    return await axios
        .post(PF + "/", profile)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const deleteProfile = async (id) => {
    return await axios
        .delete(PF + `/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const updateProfile = async ({ mainImage, name, rate }, id) => {
    const profile = { mainImage, name, rate };
    return await axios
        .put(PF + `/${id}`, profile)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

/// 좋아요

export const createLike = async ({ mediaAllSeriesId, profileId }) => {
    return await axios
        .post(PF + "/like", { mediaAllSeriesId, profileId })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const deleteLike = async ({ mediaAllSeriesId, profileId }) => {
    return await axios
        .delete(PF + "/like", { mediaAllSeriesId, profileId })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
