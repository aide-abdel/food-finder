import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const params = useParams();
  const recipe = params.recipe;
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [recipesByArea, setRecipesByArea] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const responeCategory = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe}`
      );
      const responseArea = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${recipe}`
      );
      let dataArea, dataCategory;
      try {
        dataArea = await responseArea.json();
      } catch {
        dataArea = [];
      }
      try {
        dataCategory = await responeCategory.json();
      } catch {
        dataCategory = [];
      }
      setRecipesByArea(dataArea);
      setRecipesByCategory(dataCategory);
    }
    fetchData();
  }, []);

  let recipesData;

  console.log(recipesByArea);
  console.log(recipesByCategory);
  recipesByArea.meals !== null
    ? (recipesData = recipesByArea.meals)
    : (recipesData = recipesByCategory.meals);
  console.log(recipesData);
  return (
    <div>
      <Menu />
      {recipe}
      <div className="recipes-page-container">
        {recipesData?.map((meal, index) => {
          return <RecipeCard key={index} meal={meal} />;
        })}
      </div>
    </div>
  );
}
export default Recipes;
