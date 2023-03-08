import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function MixologistCard({ mixologist }) {
  return (
    <div className="mixologist-card">
      <img src={mixologist.img} alt="" />
      <div className="mixologist-card-info">
        <h3 className="mixologist-card-name">{mixologist.name}</h3>
        <p className="mixologist-recipe-count">
          Recipes: <b>{mixologist.recipesCount}</b>
        </p>
        <p className="mixologist-date">
          Member since: <b>{mixologist.joined}</b>
        </p>
        <p className="mixologist-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
}

export default MixologistCard;
