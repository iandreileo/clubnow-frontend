import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Events from "./pages/Events/Events";
import AddEvent from "./pages/Events/AddEvent";
import ModifyEvent from "./pages/Events/ModifyEvent";
import Offers from "./pages/Offers/Offers";
import AddOffer from "./pages/Offers/AddOffer";
import DashboardClub from "./pages/DashboardClub/DashboardClub";
import ReservationsClub from "./pages/ReservationsClub/ReservationsClub";
import ReviewsClub from "./pages/ReviewsClub/ReviewsClub";
import DashboardUser from "./pages/DashboardUser/DashboardUser";
import ClubsListing from "./pages/ClubsListing/ClubsListing";
import SingleClub from "./pages/SingleClub/SingleClub";
import { ProtectedRouteLogged } from "./utils/ProtectedRoute";
import AddClub from "./pages/AddClub/AddClub";
import { useContext } from "react";
import { LoadingContext } from "./providers/LoadingProvider";

function App() {
  const [loading] = useContext(LoadingContext);

  return (
    <div className="App">
      {loading ? (
        <div>loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/login"
            element={
              <ProtectedRouteLogged>
                <Login />
              </ProtectedRouteLogged>
            }
          />

          <Route
            path="/register"
            element={
              <ProtectedRouteLogged>
                <Register />
              </ProtectedRouteLogged>
            }
          />

          <Route path="/club/dashboard" element={<DashboardClub />} />

          <Route path="/club/events" element={<Events />} />
          <Route path="/club/addevent" element={<AddEvent />} />
          <Route path="/club/modifyevent/:id" element={<ModifyEvent />} />

          <Route path="/club/offers" element={<Offers />} />
          <Route path="/club/addoffer" element={<AddOffer />} />
          <Route path="/club/modifyevent/:id" element={<ModifyEvent />} />

          <Route path="/club/reservations" element={<ReservationsClub />} />

          <Route path="/club/reviews" element={<ReviewsClub />} />

          {/*  */}

          <Route path="/user/dashboard" element={<DashboardUser />} />
          <Route path="/user/addclub" element={<AddClub />} />
          <Route path="/user/clubs" element={<ClubsListing />} />
          <Route path="/user/club/:id" element={<SingleClub />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
