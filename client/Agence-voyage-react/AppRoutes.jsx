import React from "react";
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
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/statistics" element={<Statistics />} />
        <Route path="/Dashboard/table" element={<Table />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
