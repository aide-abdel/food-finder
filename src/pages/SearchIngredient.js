import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

function SearchIngredient() {
  const params = useParams();
  const ingredient = params.ingredient;

  console.log(ingredient);
  return (
    <div>
      <Menu />
    </div>
  );
}

export default SearchIngredient;
