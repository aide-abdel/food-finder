import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
      </Routes>
    </div>
  );
}

export default App;
