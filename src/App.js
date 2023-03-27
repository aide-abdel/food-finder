import { Route, Routes } from "react-router-dom";
import Cooking101 from "./pages/Cooking101";
import Home from "./pages/Home";
import MakeRecipe from "./pages/MakeRecipe";
import MealPlanner from "./pages/MealPlanner";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import SearchIngredient from "./pages/SearchIngredient";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeDetails/:recipe" element={<RecipeDetails />} />
        <Route
          path="/SearchIngredient/:ingredient"
          element={<SearchIngredient />}
        />
        <Route path="/Recipes/:recipe" element={<Recipes />} />
        <Route path="/MakeYourRecipe" element={<MakeRecipe />} />
        <Route path="/MealPlanner" element={<MealPlanner />} />
        <Route path="/LearnToCook" element={<Cooking101 />} />
      </Routes>
    </div>
  );
}

export default App;
