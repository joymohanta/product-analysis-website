import React from "react";
import Charts from "../Charts/Charts";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h1 className="dash-title">Here are the Sell and Revenue</h1>
      <Charts></Charts>
    </div>
  );
};

export default Dashboard;
