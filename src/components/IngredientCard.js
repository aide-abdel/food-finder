import React, { useState } from "react";
import AddToRecipe from "./AddToRecipe";
import Modal from "./Modal";

function IngredientCard({ ing }) {
  const [modal, setModal] = useState(false);

  function diplayIngredientDetails(ing) {
    setModal(true);
  }
  return (
    <div className="make-recipe-ingredient-card">
      <img
        className="make-recipe-ingredient-image"
        alt={ing.strIngredient}
        src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
      />
      <div className="make-recipe-last-row-container">
        <div
          className="make-recipe-ingredient-name"
          onClick={() => diplayIngredientDetails(ing)}
        >
          {ing.strIngredient}
        </div>

        <AddToRecipe />
        <div className="make-recipe-ingredient-type"> {ing?.strType}</div>
      </div>

      {modal && <Modal ing={ing} setModal={setModal} />}
    </div>
  );
}

export default IngredientCard;
