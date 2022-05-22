import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export function ProtectedRoute({ children }) {
  let { user } = useContext(UserContext);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

export function ProtectedRouteLogged({ children }) {
  let { user } = useContext(UserContext);
  let location = useLocation();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

export function ProtectedRouteLoggedSpecialist({ userType, children }) {
  let { user } = useContext(UserContext);
  let location = useLocation();

  if (!user || userType != "specialist") {
    console.log(userType);
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    console.log(userType);
    return children;
  }
}
