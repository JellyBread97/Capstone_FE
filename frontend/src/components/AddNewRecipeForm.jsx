import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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

  const handleChange = (event, ing) => {
    const ingsIndex = ings.findIndex((i) => i._id === ing._id);
    const ingsOrig = ings;
    ingsOrig[ingsIndex] = { ...ingsOrig[ingsIndex], unit: event.target.value };
    setIngs(ingsOrig);
    console.log(ingsOrig);
  };
  const amountChange = (event, ing) => {
    const ingsIndex = ings.findIndex((i) => i._id === ing._id);
    const ingsOrig = ings;
    ingsOrig[ingsIndex] = {
      ...ingsOrig[ingsIndex],
      amount: event.target.value,
    };
    setIngs(ingsOrig);
    console.log(event.target.value);
    console.log(ingsOrig);
  };

  const units = ["g", "ml", "cl", "pc", "drop", "dash"];

  const submitHandler = async () => {
    const recipe = {
      name,
      creator: user._id,
      desc,
      img: image,
      method,
      ingredients: [],
    };
    // eslint-disable-next-line array-callback-return
    ings.map((ing) => {
      const abc = { ingredient: ing._id, amount: ing.amount, unit: ing.unit };
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
            <div className="ingsDiv">
              {ings.length !== 0 ? (
                ings.map((ing) => (
                  <div className="d-flex flex-row">
                    <div>
                      {" "}
                      <h2>{ing.name}</h2>
                    </div>
                    <div>
                      <div>
                        {" "}
                        <input
                          type={"number"}
                          onChange={(e) => amountChange(e, ing)}
                        ></input>
                        <FormControl className="unitInput">
                          <InputLabel id="demo-simple-select-label">
                            Unit
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ings[0].unit}
                            label="Unit"
                            onChange={(event) => handleChange(event, ing)}
                          >
                            {units.map((u) => (
                              <MenuItem value={u}>{u} </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
              <Button
                variant="outlined"
                className="submitButton"
                onClick={() => submitHandler()}
              >
                Submit
              </Button>
            </div>
          </Grid>
        </React.Fragment>
      </div>
    </div>
  );
}
