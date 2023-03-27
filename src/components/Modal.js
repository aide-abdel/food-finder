import React, { useState } from "react";

function Modal({ ing, setModal }) {
  //   console.log(exitModal);
  //   console.log(ing);
  const f = () => {
    setModal(false);
  };

  const [nutrients, setNutrients] = useState([]);
  // Replace YOUR_API_KEY with your actual API key
  const apiKey = "79MnT2EW1cGIM0xpYgKx1hJNEa4SxQp550jj5srO";

  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${ing?.strIngredient}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extract the nutrient information from the first food item in the list
      const nutrientelements = data.foods[0].foodNutrients;
      const nutrientsHolder = [];

      for (const nutrient of nutrientelements) nutrientsHolder.push(nutrient);
      // console.log(nutrient.nutrientName, nutrient.value, nutrient.unitName);
      setNutrients(nutrientsHolder);
    })
    .catch((error) => console.error(error));

  return (
    <div className="modal-container">
      <div className="modal-up-row">
        <div className="modal-title"> {ing?.strIngredient}</div>
        <div className="modal-exit" onClick={() => f()}>
          &times;
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-left-side">
          <div className="modal-ingredient-picture">
            <img
              src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
              alt={ing?.strIngredient}
              className="modal-ingredient-image"
            />
          </div>
          <div className="modal-ingredient-description">
            {ing?.strDescription}
          </div>
        </div>
        <div className="modal-right-side">
          <div className="modal-right-side-title">Nutrient information</div>
          <div className="modal-nutrient-container">
            {nutrients.map((nutrient, index) => {
              return (
                <div key={index} className="nutrient-row">
                  <div className="nutrient-name">{nutrient.nutrientName}</div>
                  <div className="nutrient-value">{nutrient.value}</div>
                  <div className="nutrient-unitName">{nutrient.unitName}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
