import React, { useState } from "react";
import SearchIngredient from "../pages/SearchIngredient";

// The user interface for the "Food Finder" app is designed to be simple and intuitive. Users can enter the ingredients they have on hand in the search bar, and the app will display a list of recipes that include those ingredients. The search results are displayed in cards, which provide information about the recipe, such as its name, image, and a brief description.

// Users can filter the search results by cuisine, meal type, and dietary restrictions using the filters on the left-hand side of the screen. They can also save their favorite recipes for quick access using the "Add to Favorites" button.

function Search() {
  let filters = {
    text: "",
    diet: "",
    cuisineType: "",
    mealType: "",
    dishType: "",
  };
  const [filter, setFilter] = useState(filters);
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleDietChange(event) {
    filters.diet = event.target.value;
  }
  function handleCuisineTypeChange(event) {
    filters.cuisineType = event.target.value;
  }
  function handleMealTypeChange(event) {
    filters.mealType = event.target.value;
  }
  function handleDishTypeChange(event) {
    filters.dishType = event.target.value;
  }
  function handleTextChange(event) {
    filters.text = event.target.value;
  }
  function diplaySearch() {
    // <SearchIngredient filters={filters} />;
    setFilter(filters);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-main">
        <input
          type="text"
          className="search-main-input"
          placeholder="Search ingredient"
          onChange={handleTextChange}
        />
        {/* <input type="button" value="Search" className='search-main-button'/> */}
        <div className="search-main-filters">
          <select
            name="diet"
            id="diet"
            className="search-main-filter"
            onChange={handleDietChange}
          >
            <option disabled selected>
              Diet
            </option>
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High Fiber</option>
            <option value="high-protein">High Protein</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-fat">Low Fat</option>
            <option value="low-sodium">Low Sodium</option>
          </select>

          <select
            name="cuisine-type"
            id="cuisine-type"
            className="search-main-filter"
            onChange={handleCuisineTypeChange}
          >
            <option disabled selected>
              Cuisine Type
            </option>
            <option value="american">American</option>
            <option value="asian">Asian</option>
            <option value="british">British</option>
            <option value="caribbean">Caribbean</option>
            <option value="central europe">Central Europe</option>
            <option value="chinese">Chinese</option>
            <option value="eastern europe">Eastern Europe</option>
            <option value="french">French</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="kosher">Kosher</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="nordic">Nordic</option>
            <option value="south american">South American</option>
            <option value="south east asian">South East Asian</option>
            <option value="world">World</option>
          </select>

          <select
            name="meal-type"
            id="meal-type"
            className="search-main-filter"
            onChange={handleMealTypeChange}
          >
            <option disabled selected>
              Meal Type
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch/dinner">Lunch/Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>

          <select
            name="dish-type"
            id="dish-type"
            className="search-main-filter"
            onChange={handleDishTypeChange}
          >
            <option disabled selected>
              Dish Type
            </option>
            <option value="alcohol cocktail">alcohol cocktail</option>
            <option value="biscuits and cookies">biscuits and cookies</option>
            <option value="bread">bread</option>
            <option value="cereals">cereals</option>
            <option value="condiments and sauces">condiments and sauces</option>
            <option value="desserts">desserts</option>
            <option value="drinks">drinks</option>
            <option value="egg">egg</option>
            <option value="ice cream and custard">ice cream and custard</option>
            <option value="main course">main course</option>
            <option value="pancake">pancake</option>
            <option value="pasta">pasta</option>
            <option value="pastry">pastry</option>
            <option value="pies and tarts">pies and tarts</option>
            <option value="pizza">pizza</option>
            <option value="preps">preps</option>
            <option value="preserve">preserve</option>
            <option value="salad">salad</option>
            <option value="sandwiches">sandwiches</option>
            <option value="seafood">seafood</option>
            <option value="side dish">side dish</option>
            <option value="soup">soup</option>
            <option value="special occasions">special occasions</option>
            <option value="starter">starter</option>
            <option value="sweets">sweets</option>
          </select>
        </div>
        <input
          type="submit"
          value="submit"
          className="submit-button"
          onClick={diplaySearch}
        />
      </div>
    </form>
  );
}

export default Search;
