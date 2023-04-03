import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function PreviousSearches(params) {
  const searches = [
    "rum",
    "cuba libre",
    "vodka",
    "gin",
    "tonic",
    "moscow mule",
    "tiki",
    "long island ice tea",
  ];
  return (
    <div className="previous-searches section">
      <h2>Popular Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => params.setQuery(search)}
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={params.query}
          onChange={(e) => params.setQuery(e.target.value)}
        ></input>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default PreviousSearches;
