import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";

export default function CocktailDetails() {
  const cocktail = useSelector((state) => state.recipes.cocktail);
  const allRecipes = useSelector((state) => state.recipes.recipes);
  const recipes = allRecipes
    .filter((ck) => ck._id !== cocktail._id)
    .slice(0, 3);
  return (
    <div className="cocktailsDetailsMainDiv">
      <Navbar />
      <Grid container spacing={2} className="container detailsCocktail">
        <Grid item xs={4}>
          <img src={cocktail.img} alt="cocktail" className="imgCoctail" />
        </Grid>
        <Grid item xs={8} className="cocktailInfo">
          <div>
            <div className="cocktail-top">
              {" "}
              <h2>{cocktail.name}</h2>
              <h4>
                By: {cocktail.creator.name}{" "}
                <img
                  src={cocktail.creator.avatar}
                  alt="creator"
                  className="imgAuthor"
                />
              </h4>
            </div>
            <h4>Ingredients:</h4>
            <ul>
              {cocktail.ingredients.map((ing) => (
                <li>
                  {ing.ingredient.name} {ing.amount} {ing.unit}
                </li>
              ))}
            </ul>
            <h4>Method</h4>
            <p>{cocktail.method}</p>
            <h4>Description</h4>
            <p>{cocktail.desc}</p>
          </div>
        </Grid>
      </Grid>
      <div className="h3Details">
        <h3>Check Another Recipes</h3>
      </div>
      <div className="checkAnothers">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
