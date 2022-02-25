import axios from "axios";

const ACTOR = "/actor";
const CREATOR = "/creator";
const GENRE = "/genre";
const MEDIA = "/media";
const MEDIASERIES = "/media-series";
//  actor-controller

export const createActor = async (name) => {
    return await axios
        .post(ACTOR, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const updateActor = async (name, id) => {
    return await axios
        .put(ACTOR + `/${id}`, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

// creator-controller

export const createCreator = async (name) => {
    return await axios
        .post(CREATOR, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const updateCreator = async (name, id) => {
    return await axios
        .put(CREATOR + `/${id}`, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const createGenre = async (name) => {
    return await axios
        .post(GENRE, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const updateGenre = async (name, id) => {
    return await axios
        .put(GENRE + `/${id}`, { name })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

//// media-controller

export const getMediaContent = async (id) => {
    return await axios
        .get(MEDIA + `/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getMediaContentsList = async (id) => {
    return await axios
        .get(MEDIA + `/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getMediaSeries = async (id) => {
    return await axios
        .get(MEDIASERIES + `/{id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getMediaSeriesAll = async (id) => {
    return await axios
        .get(MEDIASERIES + `/all/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getMediaSeriesDetail = async ({ mediaAllSeriesId, profileId }) => {
    return await axios.get();
};
