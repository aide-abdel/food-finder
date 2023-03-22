import React from "react";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

function CategoryRecipes({ category }) {
  // for every category fecth all elements and put them in Recipe card
  // https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}

  const [carousel, setCarousel] = useState([]);
  const [arrayFromData, setArrayFromData] = useState([]);
  const [counterCarousel, setCounterCarousel] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setArrayFromData(data.meals);
      if (data.meals.length < 4) {
        setCarousel(arrayFromData);
      } else {
        setCarousel(arrayFromData.slice(counterCarousel, counterCarousel + 4));
        // setCounterCarousel(counterCarousel + 1);
      }
    }
    fetchData();
  });

  const nextCarousel = () => {
    setCarousel(
      arrayFromData.slice(
        counterCarousel % arrayFromData.length,
        counterCarousel + 4
      )
    );
    setCounterCarousel(counterCarousel + 1);
    console.log(counterCarousel);
  };
  function previousCarousel() {
    setCarousel(arrayFromData.slice(counterCarousel, counterCarousel + 4));
    setCounterCarousel(
      counterCarousel > 0 ? counterCarousel - 1 : arrayFromData.length - 1
    );
    console.log(counterCarousel);
  }
  if (arrayFromData.length > 4)
    return (
      <div className="category-recipes-container">
        <div className="category-recipes-title">{category}</div>
        <div className="home-recipes-container">
          <button
            className="previous-category-recipes"
            onClick={previousCarousel}
          >
            {" "}
            &lt;{" "}
          </button>
          {[0, 1, 2, 3].map((element, index) => (
            <RecipeCard key={index} meal={carousel[element]} />
          ))}

          <button className="next-category-recipes" onClick={nextCarousel}>
            {" "}
            &gt;{" "}
          </button>
        </div>
      </div>
    );
  else {
    return (
      <div className="category-recipes-container">
        <div className="category-recipes-title">{category}</div>
        <div className="home-recipes-container">
          {carousel.map((element, index) => (
            <RecipeCard key={index} meal={element} />
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryRecipes;
