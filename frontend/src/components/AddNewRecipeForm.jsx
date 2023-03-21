import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Autocomplete, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchCocktailsAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function AddNewRecipeForm() {
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.recipes.ings);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.accessToken);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [method, setMethod] = useState("");
  const [ings, setIngs] = useState([]);

  const submitHandler = async () => {
    const recipe = {
      name,
      creator: user._id,
      desc,
      img: image,
      method,
      ingredients: [],
    };
    ings.map((ing) => {
      const abc = { ingredient: ing._id, amount: 10, unit: "g" };
      recipe.ingredients.push(abc);
    });

    try {
      const options = {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/recipes`,
        options
      );
      if (response.ok) {
        fetchCocktailsAction(token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newFormContainer">
      <div className={"newForm"}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Add new Recipe
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="image"
                name="image"
                label="Image"
                fullWidth
                autoComplete="image"
                variant="standard"
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="desc"
                name="desc"
                label="Description"
                fullWidth
                autoComplete="description"
                variant="standard"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="method"
                name="method"
                label="Method"
                fullWidth
                autoComplete="method"
                variant="standard"
                onChange={(e) => setMethod(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={ingredients}
                onChange={(options, value) => setIngs(value)}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Ingredients"
                    placeholder="Favorites"
                  />
                )}
                sx={{ width: "500px" }}
              />
            </Grid>

            <Button
              variant="outlined"
              className="submitButton"
              onClick={() => submitHandler()}
            >
              Submit
            </Button>
          </Grid>
        </React.Fragment>
      </div>
    </div>
  );
}
