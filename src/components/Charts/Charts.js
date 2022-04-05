import React, { useEffect, useState } from "react";
import "./Charts.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Charts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="chart">
      <div className="item">
        <LineChart width={500} height={300} data={product}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className="item">
        <BarChart width={530} height={325} data={product}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="sell" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
