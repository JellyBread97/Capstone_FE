import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Grid } from "@mui/material";

function MixologistCard({ mixologist }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <Grid container className="mixologist-card">
      <Grid item xs={5}>
        <img src={mixologist.avatar} alt="" />
      </Grid>
      <Grid item xs={7} className="mixologist-card-info">
        <h3 className="mixologist-card-name">{mixologist.name}</h3>
        <p className="mixologist-recipe-count">
          Recipes: <b>{Math.ceil(Math.random() * 10)}</b>
        </p>
        <p className="mixologist-date">
          Member since:{" "}
          <b>
            {new Date(mixologist.createdAt).toLocaleDateString(
              "en-EN",
              options
            )}
          </b>
        </p>
        <p className="mixologist-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </Grid>
    </Grid>
  );
}

export default MixologistCard;
