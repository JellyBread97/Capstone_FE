import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />I feel bad for people who don't
        drink. When they wake up in the morning, that's as good as they're going
        to feel all day.
      </p>
      <p className="quote-author">- Frank Sinatra</p>
    </div>
  );
}

export default QuoteSection;
