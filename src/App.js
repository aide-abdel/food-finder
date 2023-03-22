import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeDetails/:recipe" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
