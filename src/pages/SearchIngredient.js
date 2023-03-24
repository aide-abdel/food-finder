import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import RecipeCard from "../components/RecipeCard";

function SearchIngredient() {
  const params = useParams();
  const ingredient = params.ingredient;
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      try {
        const data = await response.json();
        setMeals(data.meals);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Menu />
      <div className="search-result-container">
        {meals?.map((meal, index) => (
          <RecipeCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default SearchIngredient;
