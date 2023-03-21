import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreviousSearches from "./PreviousSearches";
import RecipeCard from "./RecipeCard";

function RecipesPage() {
  const recipes = useSelector((state) => state.recipes.recipes);
  return (
    <div>
      <Navbar />
      <div className="container main">
        <PreviousSearches />
        <div className="container-recipies">
          {/* <RecipeCard /> */}
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecipesPage;
