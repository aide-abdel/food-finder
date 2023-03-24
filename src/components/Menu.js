import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Menu() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      try {
        const data = await response.json();
        setAreas(data.meals);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);
  return (
    <nav className="menu-container">
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
          alt="food logo"
          className="logo-img"
        />
      </div>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item drop-down-menu-recipes">Recipes</li>
        <div className="recipe-menu-categories">
          <ul className="recipe-category">
            Cuisine Area
            {areas?.map((area, index) => (
              <li key={index} className="recipe-category-menu-item">
                <Link to={`/Recipes/${area.strArea}`}>{area.strArea}</Link>
              </li>
            ))}
          </ul>
          <ul className="recipe-category">
            Meal Type
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/breakFast">breakFast </Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/dessert">Dessert </Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/side">Side </Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/starter">Starter</Link>
            </li>
          </ul>
          <ul className="recipe-category">
            Dish type
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/beef">Beef </Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/chicken">Chicken</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/goat">Goat</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/lamb">Lamb</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/pork">Pasta</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/pork">Pork</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/vegan">Vegan</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/vegetarian">Vegetarian</Link>
            </li>
            <li className="recipe-category-menu-item">
              <Link to="/Recipes/miscellaneous">Miscellaneous</Link>
            </li>
          </ul>
        </div>
        <li className="menu-list-item">Meal Planner</li>
        <li className="menu-list-item">
          <Link to="/MakeYourRecipe">Make your Recipe</Link>
        </li>
        {/* https://www.eatthismuch.com/food/browse/?type=recipe */}
        <li className="menu-list-item">Cooking 101</li>
      </ul>
      <div className="login-search">
        <div className="search">
          <Search cssClass="search-menu-bar" />
        </div>
        <div className="login">Login</div>
      </div>
    </nav>
  );
}

export default Menu;
