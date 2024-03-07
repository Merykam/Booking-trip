import React from "react";
import Table from "../components/DashbordComponents.jsx/table";
import Statistics from "../components/DashbordComponents.jsx/statistics";
import Layout from "./Layout";



const Dashboard = () => {
  return (
 
    <Layout>
      <div className="">
        <Statistics></Statistics>
        <Table></Table>
      </div>
    </Layout>  
  
  );
};

export default Dashboard;
