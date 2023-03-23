import React from "react";

function SearchIngredient() {
  const app_id = "3462496e";
  const app_key = "63a792810144fcc388927739d7fa1ca3";
  const recipe_name = "chicken";

  let filters = {
    text: "chicken",
    diet: "balanced",
    cuisineType: "american",
    mealType: "breakfast",
    dishType: "bread",
  };

  // Construct the API endpoint URL
  const endpoint = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${filters?.text}&diet=${filters?.diet}&cuisineType=${filters?.cuisineType}&mealType=${filters?.mealType}&dishType=${filters?.dishType}`;

  // Make the API request
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log("Data is here ", data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error message", error);
    });
  return <div>SearchIngredient</div>;
}

export default SearchIngredient;
