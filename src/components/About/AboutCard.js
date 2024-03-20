import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

function AboutCard() {
  const [quote, setQuote] = useState({text: "", author: ""})

  useEffect(() => {
    async function getInitialQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
    }
    getInitialQuote();
  }, [])
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oarabile Kgatlhane </span>
            from <span className="purple"> Molekos Farm, Kimberly, Nothern Cape.</span>
            
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
          {quote.text}
          </p>
          <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
