import React, { useEffect, useState } from "react";
import IngredientCard from "../components/IngredientCard";
import Menu from "../components/Menu";

function MakeRecipe() {
  const [ingredients, setIngredient] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      try {
        const data = await response.json();
        setIngredient(data);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Menu />
      <div className="make-recipe-container">
        {ingredients.meals?.map((ing, index) => {
          return <IngredientCard key={index} ing={ing} />;
        })}
      </div>
    </div>
  );
}

export default MakeRecipe;
