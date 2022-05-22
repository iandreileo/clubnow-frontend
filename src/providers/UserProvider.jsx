/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../api";
import { createUser, getUser } from "../api/auth.api";
import { LoadingContext } from "./LoadingProvider";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    auth.auth().onAuthStateChanged((userData) => {
      if (userData) {
        getUser(userData, 1).then((response) => {
          setUser({ ...userData, user: response });
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
