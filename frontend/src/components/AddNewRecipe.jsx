import React from "react";
import AddNewRecipeForm from "./AddNewRecipeForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AddNewRecipe() {
  return (
    <div>
      <Navbar />
      <AddNewRecipeForm />
      <Footer />
    </div>
  );
}
