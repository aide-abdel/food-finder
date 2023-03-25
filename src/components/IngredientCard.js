import React, { useState } from "react";
import Modal from "./Modal";

function IngredientCard({ ing }) {
  const [modal, setModal] = useState(false);

  function diplayIngredientDetails(ing) {
    setModal(true);
  }
  function exitModal() {
    setModal(false);
  }
  return (
    <div
      className="make-recipe-ingredient-card"
      onClick={() => diplayIngredientDetails(ing)}
    >
      <img
        className="make-recipe-ingredient-image"
        alt={ing.strIngredient}
        src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
      />
      <div className="make-recipe-last-row-container">
        <div className="make-recipe-ingredient-name">{ing.strIngredient}</div>
        <div className="make-recipe-ingredient-add-remove"> +/-</div>
        <div className="make-recipe-ingredient-type"> {ing?.strType}</div>
      </div>
      {modal && <Modal ing={ing} exitModal={exitModal} modal={modal} />}
    </div>
  );
}

export default IngredientCard;
