import axios from "axios";
import { HOST, PORT } from "../utils/Constants";

export const createUser = async (user, accountType) => {
  const { email, uid, metadata } = user._delegate;
  try {
    const res = await axios.post(`${HOST}:${PORT}/api/v1/user`, {
      uid: uid,
      name: email,
      type: 1,
    });
    const response = res.data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (user, accountType) => {
  const { email, uid, metadata } = user._delegate;

  try {
    const res = await axios.get(`${HOST}:${PORT}/api/v1/user`, {
      uid: uid,
    });
    const response = res.data.user[0];
    return response;
  } catch (err) {
    if (err.response.status === 404) {
      createUser(user, accountType).then((response) => {
        console.log(response);
        return response.user;
      });
    }
  }
};
