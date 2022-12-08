import React from "react";
import "./style.scss";

const SelectInput = ({ naming, name, datas }) => {
  return (
    <div className="dropdown-input">
      <label htmlFor={naming}>{name}</label>
      <select name={name} id={name}>
        {datas.map((data) => (
          <option value={data.value}>{data.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
