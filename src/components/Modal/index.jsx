import React from "react";
import "./style.scss";
import iconClose from "../../assets/close-icon.svg";

const Modal = ({ isOpen, closeModal }) => {
  if (isOpen === true) {
    return (
      <div className="modal">
        <div className="modalContainer">
          Employee Created!
          <button className="closeModal" onClick={closeModal}>
            <img src={iconClose} alt="SVG icon close" />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
