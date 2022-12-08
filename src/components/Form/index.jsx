import React, { useState } from "react";
import DepartmentsData from "../../services/data/department.json";
import StatesData from "../../services/data/state.json";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Modal from "../Modal";
import "./style.scss";
import DateInput from "../../components/DateInput";
import { useDispatch } from "react-redux";
import { addEmployes } from "../../services/redux/action";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const employes = {
      firstName: event.target.form[0].value,
      lastName: event.target.form[1].value,
      dateOfBirth: event.target.form[2].value,
      startDate: event.target.form[3].value,
      street: event.target.form[5].value,
      city: event.target.form[6].value,
      state: StatesData.find(
        (data) => data.value === event.target.form[7].value
      ).abbreviation,
      zipCode: event.target.form[8].value,
      department: DepartmentsData.find(
        (data) => data.value === event.target.form[9].value
      ).label,
    };
    dispatch(addEmployes(employes));
    openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="form">
      <form id="create-employees">
        <Input naming="first-name" type="text" name="First Name" />
        <Input naming="last-name" type="text" name="Last Name" />
        <DateInput naming="date-of-birth" name="Date of Birth" />
        <DateInput naming="start-date" name="Start Date" />
        <fieldset className="address">
          <legend>Address</legend>
          <Input naming="street" type="text" name="Street" />
          <Input naming="city" type="text" name="City" />
          <SelectInput naming="state" name="State" datas={StatesData} />
          <Input naming="zip-code" type="text" name="Zip Code" />
        </fieldset>
        <SelectInput
          naming="department"
          name="Department"
          datas={DepartmentsData}
        />
        <div className="buttonSaveForm">
          <button className="saveForm" type="submit" onClick={handleSubmit}>
            save
          </button>
        </div>
      </form>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Form;
