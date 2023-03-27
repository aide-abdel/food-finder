import React, { useState } from "react";

function AddToRecipe() {
  const [added, setAdded] = useState(false);

  return (
    <div
      onClick={() => setAdded(!added)}
      className={
        !added ? `make-recipe-ingredient-add` : `make-recipe-ingredient-remove`
      }
    >
      {!added ? "Add" : "Remove"}
    </div>
  );
}

export default AddToRecipe;
