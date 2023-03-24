import React, { useEffect, useState } from "react";
import CategoryRecipes from "../components/CategoryRecipes";
import Menu from "../components/Menu";
import Search from "../components/Search";
function Home() {
  /* After search, we will display meals by categories from  TheMealDBAPI*/

  const [categoryDataHome, setCategoryDataHome] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json();
      setCategoryDataHome(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Menu />
      <Search />
      {categoryDataHome?.meals.map((category, index) => {
        return <CategoryRecipes key={index} category={category.strCategory} />;
      })}
    </div>
  );
}

export default Home;
