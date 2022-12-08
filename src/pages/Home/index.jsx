import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";

import "./style.scss";

const Home = () => {
  return (
    <>
      <h1 className="title">HRnet</h1>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
};

export default Home;
