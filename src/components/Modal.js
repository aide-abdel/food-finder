import React from "react";

function Modal({ ing, exitModal, modal }) {
  //   console.log(exitModal);
  //   console.log(ing);
  console.log("modal", modal);
  return (
    <div
      className="modal-container"
      onClick={() => {
        exitModal();
        console.log("Test click");
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
