import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from "./src/pages/LandingPage";
import Dashboard from './src/pages/Dashboard'
import Statistics from "./src/components/DashbordComponents.jsx/statistics";
import Table from "./src/pages/tablePage";
import Signup from "./src/components/signup";
import Login from "./src/components/login";
import {getUserInfo} from './src/redux/user'
import { useDispatch, useSelector } from "react-redux";
const AppRoutes = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state)=>state.user.userInfo)
  console.log(userInfo.role);
  // const userRole = userInfo.role;
  
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (userInfo) console.log(userInfo[0]?.role);
  }, [userInfo]);

  const role = userInfo[0]?.role;

    const CheckRole = ({ children }) => {
    if (role== "0") {
      return <Navigate to="/" />;
    }

    return children;
  };
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
