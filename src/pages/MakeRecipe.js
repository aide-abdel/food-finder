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

  return (
    <div>
      <Menu />
      <div className="make-recipe-container">
        <table className="recipe-table">
          <thead>
            <tr>
              <th>ADD/REMOVE</th>
              <th>name</th>
              <th>Image</th>
              <th>description</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody className="recipe-table-body">
            {ingredients.meals?.map((ing, index) => {
              return (
                <tr key={index} className="table-recipe-row">
                  <td>+/-</td>
                  <td>{ing.strIngredient}</td>
                  <td className="recipe-image-container">
                    <img
                      className="recipe-image"
                      alt={ing.strIngredient}
                      src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
                    />
                  </td>
                  <td className="recipe-table-description">
                    {ing?.strDescription}
                  </td>
                  <td>{ing?.strType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MakeRecipe;
