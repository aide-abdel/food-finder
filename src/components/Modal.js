import React from "react";

function Modal({ ing, exitModal }) {
  //   console.log(exitModal);
  //   console.log(ing);
  return (
    <div
      className="modal-container"
      onClick={() => {
        exitModal(false);
        console.log("Modal");
      }}
    >
      <div className="modal-up-row">
        <div className="modal-title"> {ing?.strIngredient}</div>
        <div className="modal-exit">&times;</div>
      </div>
      <div className="modal-body">{ing?.strDescription}</div>
    </div>
  );
}

export default Modal;
