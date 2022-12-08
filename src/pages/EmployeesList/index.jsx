import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const EmployeesList = () => {
  return (
    <div className="container">
      <h1>Current Employees</h1>

      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeesList;
