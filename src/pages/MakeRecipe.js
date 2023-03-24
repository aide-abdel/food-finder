import React, { useEffect, useState } from "react";
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
  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        console.log("image exists");
      }
    };
    image.onerror = function () {
      console.log("image doesn't exist");
    };
    image.src = url;
  }
  //   checkImage("https://picsum.photos/200/300");

  console.log(ingredients.meals);
  return (
    <div>
      <Menu />
      {ingredients.meals?.map((ing, index) => {
        if (index < 20)
          return (
            <>
              <div>
                {ing.strIngredient} : {ing?.strDescription}
              </div>
              <img
                alt={ing.strIngredient}
                src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
              />
            </>
          );
      })}
    </div>
  );
}

export default MakeRecipe;
