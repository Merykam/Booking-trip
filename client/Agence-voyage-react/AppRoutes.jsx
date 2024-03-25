import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from "./src/pages/LandingPage";
import Dashboard from "./src/pages/Dashboard";
import Statistics from "./src/components/DashbordComponents.jsx/statistics";
import Table from "./src/pages/tablePage";
import Signup from "./src/components/signup";
import Login from "./src/components/login";
import { getUserInfo } from "./src/redux/user";
import { useDispatch, useSelector } from "react-redux";
import PackageDetails from "./src/pages/PackageDetails";
import BookPackage from "./src/pages/bookPackage";
import UsersPage from "./src/pages/users";
import Reservations from "./src/pages/reservations";
import SuccessReservation from "./src/pages/SuccessReservation";
import Profile from "./src/pages/profile";
import Adminprofile from "./src/pages/adminProfile";
import EditPackage from "./src/pages/EditPackage";
import Verify from "./src/components/verify";
import PackageDetailsDashboard from "./src/pages/packageDetailsAdmin";
import History from "./src/pages/history";
import PackageReservations from "./src/pages/packageReservations";
import Cities from "./src/pages/cities";
import Hotels from "./src/pages/hotels";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserInfo());
       setLoading(false);
    };

    fetchData();
  }, []);

  const CheckRole = ({ children }) => {
    if (userInfo[0]?.role != "2" && userInfo[0]?.role != "1") {
      return <Navigate to="/" />;
    }
    return children;
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/Dashboard"
          element={
            <CheckRole>
              <Dashboard />
            </CheckRole>
          }
        />
        <Route
          path="/Dashboard/statistics"
          element={
            <CheckRole>
              <Statistics />
            </CheckRole>
          }
        />
        <Route
          path="/Dashboard/table"
          element={
            <CheckRole>
              <Table />
            </CheckRole>
          }
        />
        <Route
          path="/packageDetails/:id"
          element={<PackageDetails></PackageDetails>}
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/Booking/:id" element={<BookPackage></BookPackage>} />
        <Route path="/dashboard/users" element={ <CheckRole><UsersPage></UsersPage></CheckRole>} />
        <Route
          path="/dashboard/reservations"
          element={<CheckRole><Reservations></Reservations></CheckRole>}
        />
        <Route
          path="/BookingSuccess/:id"
          element={<SuccessReservation></SuccessReservation>}
        />

        <Route
          path="dashboard/packageDetails/:id"
          element={<CheckRole><PackageDetailsDashboard></PackageDetailsDashboard></CheckRole>}
        />

        <Route path="/profile" element={<Profile></Profile>} />
        <Route
          path="/dashboard/profile"
          element={<CheckRole><Adminprofile></Adminprofile></CheckRole>}
        />
        <Route
          path="/dashboard/edit/:id"
          element={<CheckRole><EditPackage></EditPackage></CheckRole>}
        />
        <Route path="/verify/:id" element={<Verify></Verify>} />
        <Route path="/history" element={<History></History>} />
        <Route
          path="/dashboard/packageBookings/:id"
          element={<CheckRole><PackageReservations></PackageReservations></CheckRole>}
        />
        <Route path="/dashboard/cities" element={<CheckRole><Cities></Cities></CheckRole>} />
        <Route path="/dashboard/hotels" element={ <CheckRole><Hotels></Hotels></CheckRole>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
