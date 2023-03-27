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
      <div className="intro-make-recipe">
        <div className="intro-make-recipe-img">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/woman-hands-cutting-carrots-on-wooden-board-and-fresh-news-photo-1579020108.jpg?crop=1xw:0.74963xh;center,top&resize=1200:*"
            className="intro-make-recipe-img-pic"
            alt="make recipe"
          />
        </div>
        <div className="intro-make-recipe-text">
          Create your perfect recipe by easily adding and removing ingredients
          with our simple tool. Click "Add" to add an ingredient, and "Remove"
          to remove it. Happy cooking!
        </div>
      </div>
      <div className="make-recipe-container">
        {ingredients.meals?.map((ing, index) => {
          return <IngredientCard key={index} ing={ing} />;
        })}
      </div>
    </div>
  );
}

export default MakeRecipe;
