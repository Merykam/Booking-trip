import React from "react";
import Dashboard from "./Dashboard";
import Table from "../components/DashbordComponents.jsx/table";
import Layout from "./Layout";
import Model from "../components/DashbordComponents.jsx/model/model";

const tablePage = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="ms-8 mt-8">
          <span className="text-slate-500 font-bold">Dashboard</span> / Table
        </h1>
        <div className="mt-8">
          <Model></Model>
        </div>
      </div>

      <Table></Table>
    </Layout>
  );
};

export default tablePage;
