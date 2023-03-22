import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ meal }) {
  const recipe = meal?.strMeal;
  return (
    <div className="recipe-card">
      <div className="recipe-card-img-container">
        <img
          src={meal?.strMealThumb}
          alt="meal thumbnail"
          className="recipe-card-img"
        />
      </div>
      <div className="recipe-card-name">
        <Link to={`/RecipeDetails/${recipe}`}>{meal?.strMeal}</Link>
      </div>
      <div className="recipe-card-menu">
        <div className="recipe-card-full-recipe">ingredient</div>
        <div className="recipe-card-add-planner">Add to planner</div>
        <div className="recipe-card-favorite">Favorite</div>
      </div>
    </div>
  );
}

export default RecipeCard;
