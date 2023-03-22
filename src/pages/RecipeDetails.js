import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

function RecipeDetails() {
  const params = useParams();
  const recipe = params.recipe;

  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
      );
      try {
        const data = await response.json();
        setRecipeDetails(data.meals[0]);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  });

  function fetchIngredientImage(ing) {
    return `https://www.themealdb.com/images/ingredients/${ing}.png`;
  }
  function convertYoutube(vid) {
    if (vid) return vid.replace("/watch?v=", "/embed/");
  }

  const returnIngredients = () => {
    const ingredients = [];
    if (recipeDetails && typeof recipeDetails === "object") {
      for (const [key, value] of Object.entries(recipeDetails)) {
        if (value && key.includes("strIngredient")) {
          ingredients.push(value);
        }
      }
      return ingredients.map((ingredient, index) => (
        <div
          key={index}
          className="recipe-details-ingredient-measure-name-img-container"
        >
          <div className="recipe-details-ingredient-image">
            <img
              className="recipe-details-ingredient-image-thumb"
              src={fetchIngredientImage(ingredient)}
              alt={ingredient}
            />
          </div>
          <div className="recipe-details-ingredient-measure-name-container">
            <div className="recipe-details-ingredient-measure">
              {recipeDetails[`strMeasure${index + 1}`]}
            </div>
            <div className="recipe-details-ingredient-name">{ingredient}</div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <Menu />
      <div className="recipe-details-container">
        <div className="recipe-details-name">{recipeDetails?.strMeal}</div>
        <div className="recipe-details-img-container">
          <img
            src={recipeDetails?.strMealThumb}
            className="recipe-details-img-thumb"
            alt={recipeDetails?.strMeal}
          />
          <div className="recipe-details-tag">
            <div className="recipe-details-area">{recipeDetails?.strArea}</div>
            <div className="recipe-details-category">
              {recipeDetails?.strCategory}
            </div>
          </div>
        </div>
        <div className="recipe-details-ingredients">Ingredients</div>
        <div className="recipe-details-ingredients-container">
          {returnIngredients()}
        </div>
        <div className="recipe-details-instructions-title">Instructions</div>
        <div className="recipe-details-instructions">
          {recipeDetails?.strInstructions}
        </div>
        <div className="recipe-details-video">
          <iframe
            width="720"
            height="480"
            src={convertYoutube(recipeDetails?.strYoutube)}
            title={recipeDetails?.strCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
