import React, { useState } from 'react';
import './QuoteGenerator.css';
import { quotes } from '../../constants/loveQuotes';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="QuoteGenerator">
      <h1>Love Quote Generator</h1>
      <p className="disclaimer">
        Love your wife! but her love language is words of affirmation, and you're not sure where to start? Use this generator to set your mood and come up with the right affirmation.
      </p>
      <p><strong className="warning" > Don't be lazy enough to tell direct text to your wife.</strong></p>
      <p className="small">** A small help from a techie to the world **</p>
      <p className="Quote">{currentQuote}</p>
      <button onClick={generateRandomQuote} className='quoteButton'>Set My Mood</button>
    </div>
  );
};

export default QuoteGenerator;
