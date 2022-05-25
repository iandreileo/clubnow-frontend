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

export const getClubsPending = async () => {
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/clubspending`);
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

export const createReview = async (review) => {
  try {
    const res = await axios.post(`${HOST}:${PORT}/api/v1/createreview`, {
      review,
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

export const getReviewsByClub = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/getreviews?id=${id}`);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getPendingReviewsByClub = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/getpendingreviews?id=${id}`);
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

export const approveclub = async (id) => {
  console.log(id);
  try {
    const res = await axios.patch(`${HOST}:${PORT}/api/v1/approveclub`,{
      id: id,
    },);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const approvereview = async (id) => {
  console.log(id);
  try {
    const res = await axios.patch(`${HOST}:${PORT}/api/v1/approvereview`,{
      id: id,
    },);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateClub = async (id, club) => {
  console.log(id);
  try {
    const res = await axios.patch(`${HOST}:${PORT}/api/v1/updateclub`,{
      id: id,
      club: club
    },);
    console.log(res);
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};
