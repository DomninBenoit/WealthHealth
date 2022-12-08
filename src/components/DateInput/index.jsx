import React, { useState } from "react";
import "./style.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ naming, name }) => {
  const [startDate, setStartDate] = useState();

  const onChangeDateOfBirthHandler = (event) => {
    setStartDate(event);
  };
  return (
    <div className="date-input">
      <label htmlFor={naming}>{name}</label>
      <DatePicker
        selected={startDate}
        onChange={onChangeDateOfBirthHandler}
        showMonthDropdown
        showYearDropdown
      />
    </div>
  );
};

export default DateInput;
