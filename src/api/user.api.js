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
    const res = await axios.get(`${HOST}:${PORT}/api/v1/club`, {
      ownerId: uid,
    });
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};
