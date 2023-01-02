import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployeeList } from "../../services/redux/selector";
import "./style.scss";
import columns from "../../services/data/columns";
import { Tables } from "react-tables-employes";

const EmployeesList = () => {
  const listEmployes = useSelector(getEmployeeList);
  console.log(listEmployes);
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <Tables datas={listEmployes} columns={columns} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeesList;
