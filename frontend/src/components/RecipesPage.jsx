/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreviousSearches from "./PreviousSearches";
import RecipeCard from "./RecipeCard";

function RecipesPage() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);

  const filterRecipes = () => {
    if (query.length !== 0) {
      const filteredRecipes = recipes.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilter(filteredRecipes);
    } else {
      setFilter(recipes);
    }
  };

  useEffect(() => {
    filterRecipes();
  }, [query]);
  return (
    <div>
      <Navbar />
      <div className="container main">
        <PreviousSearches query={query} setQuery={setQuery} />
        <div className="container-recipies">
          {/* <RecipeCard /> */}
          {filter.length !== 0 ? (
            filter.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          ) : (
            <h2>Nothing found :'(</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecipesPage;
