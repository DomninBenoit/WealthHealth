import React from "react";
import "./style.scss";

const Input = ({ naming, type, name }) => {
  return (
    <div className="input">
      <label htmlFor={naming}>{name}</label>
      <input type={type} name={naming} />
    </div>
  );
};

export default Input;
