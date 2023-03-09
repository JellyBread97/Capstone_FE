import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreviousSearches from "./PreviousSearches";
import RecipeCard from "./RecipeCard";

function RecipesPage() {
  const recipes = [
    {
      title: "Pink Recipe Yum",
      image: "/img/gallery/1.jpg",
      authorImg: "/img/bartenders/1-jack.jpg",
    },
    {
      title: "Different Recipe Yum",
      image: "/img/gallery/2.jpg",
      authorImg: "/img/bartenders/2-erion.jpg",
    },
    {
      title: "Amazing One",
      image: "/img/gallery/3.jpg",
      authorImg: "/img/bartenders/3-alan.jpg",
    },
    {
      title: "Invincibility Potion",
      image: "/img/gallery/4.jpg",
      authorImg: "/img/bartenders/4-morten.jpg",
    },
    {
      title: "BIG YUM",
      image: "/img/gallery/5.jpg",
      authorImg: "/img/bartenders/1-jack.jpg",
    },
    {
      title: "Liquid Special",
      image: "/img/gallery/10.jpg",
      authorImg: "/img/bartenders/1-alan.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <Navbar />
      <div className="container main">
        <PreviousSearches />
        <div className="recipes-container">
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
