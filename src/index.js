import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/menu.css";
import "./styles/search.css";
import "./styles/recipecard.css";
import "./styles/categoryrecipes.css";
import "./styles/recipedetails.css";
import "./styles/recipespage.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
