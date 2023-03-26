import React from "react";

function Modal({ ing, setModal }) {
  //   console.log(exitModal);
  //   console.log(ing);
  const f = () => {
    setModal(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-up-row">
        <div className="modal-title"> {ing?.strIngredient}</div>
        <div className="modal-exit" onClick={() => f()}>
          &times;
        </div>
      </div>
      <div className="modal-body">{ing?.strDescription}</div>
    </div>
  );
}

export default Modal;
