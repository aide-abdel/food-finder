import React from "react";
import { Link } from "react-router-dom";

function Menu() {
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
            {/* Cuisine Area */}
            <li className="recipe-category-menu-item">American</li>
            <li className="recipe-category-menu-item">British</li>
            <li className="recipe-category-menu-item">Canadian</li>
            <li className="recipe-category-menu-item">Chinese</li>
            <li className="recipe-category-menu-item">Croatian</li>
            <li className="recipe-category-menu-item">Dutch</li>
            <li className="recipe-category-menu-item">Egyptian</li>
            <li className="recipe-category-menu-item">French</li>
            <li className="recipe-category-menu-item">Greek</li>
          </ul>
          <ul className="recipe-category">
            {/* Meal Type */}
            <li className="recipe-category-menu-item">BreakFast</li>
            <li className="recipe-category-menu-item">Dinner</li>
            <li className="recipe-category-menu-item">Lunch</li>
          </ul>
          <ul className="recipe-category">
            {/* Diet */}
            <li className="recipe-category-menu-item">Balanced</li>
            <li className="recipe-category-menu-item">High-fiber</li>
            <li className="recipe-category-menu-item">High-protein</li>
          </ul>
        </div>
        <li className="menu-list-item">Meal Planner</li>
        <li className="menu-list-item">Make your Recipe</li>
        {/* https://www.eatthismuch.com/food/browse/?type=recipe */}
        <li className="menu-list-item">Cooking 101</li>
      </ul>
      <div className="login-search">
        <div className="search">Search</div>
        <div className="login">Login</div>
      </div>
    </nav>
  );
}

export default Menu;
