import axios from "axios";

const BASE_URL = "https://qtify-backend-labs.crio.do";
const STATUS_SUCCESS = 200;

export const getTopSongs = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/albums/top`);
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const getNewAlbums = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/albums/new`);
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const getGenre = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/genres`);
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const getSongs = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/songs`);
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
