import { auth } from "../api";

export const HandleLogout = () => {
  auth
    .auth()
    .signOut()
    .then((result) => {
      console.log(result);
      window.location.href = "/";
      // TODO: REDIRECT
    });
};
