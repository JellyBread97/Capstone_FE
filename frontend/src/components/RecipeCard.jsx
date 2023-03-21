import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveCocktailAction } from "../redux/actions";
import CustomImage from "./CustomImage";

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToRecipe = () => {
    dispatch(saveCocktailAction(recipe));
    navigate("/cocktail");
  };
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.img} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.creator.avatar} alt="" />
        <p className="recipe-title">{recipe.name}</p>
        <p className="recipe-desc">{recipe.desc}</p>
        <Button className="view-btn" onClick={moveToRecipe}>
          VIEW RECIPE
        </Button>
      </div>
    </div>
  );
}

export default RecipeCard;
