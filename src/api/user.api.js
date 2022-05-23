import axios from "axios";
import { HOST, PORT } from "../utils/Constants";

export const createClub = async (club) => {
  try {
    const res = await axios.post(`${HOST}:${PORT}/api/v1/club`, {
      club,
    });
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getClubByOwnerId = async (uid) => {
  console.log(uid);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/club?id=${uid}`);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getClubs = async () => {
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/clubs`);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getClubById = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/clubbyid?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getOffersById = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/offers?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getEventsById = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/events?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const createEvent = async (event) => {
  try {
    const res = await axios.post(`${HOST}:${PORT}/api/v1/event`, {
      event,
    });
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getEventsByClub = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/events?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const createOffer = async (offer) => {
  try {
    const res = await axios.post(`${HOST}:${PORT}/api/v1/offer`, {
      offer,
    });
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getOffersByClub = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/offers?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};
