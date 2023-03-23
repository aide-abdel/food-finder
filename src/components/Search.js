import { useState } from "react";
import { useNavigate } from "react-router-dom";

// The user interface for the "Food Finder" app is designed to be simple and intuitive. Users can enter the ingredients they have on hand in the search bar, and the app will display a list of recipes that include those ingredients. The search results are displayed in cards, which provide information about the recipe, such as its name, image, and a brief description.

// Users can filter the search results by cuisine, meal type, and dietary restrictions using the filters on the left-hand side of the screen. They can also save their favorite recipes for quick access using the "Add to Favorites" button.

function Search() {
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    navigate(`/SearchIngredient/${ingredient}`);
  }
  function handleChange(e) {
    setIngredient(e.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="search-main">
        <input
          type="text"
          className="search-main-input"
          placeholder="Search ingredient"
          onChange={handleChange}
        />
        {/* <input type="button" value="Search" className='search-main-button'/> */}

        <input type="submit" value="submit" className="submit-button" />
      </div>
    </form>
  );
}

export default Search;
