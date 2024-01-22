import React from 'react';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Love Quote Generator</h1>
        <QuoteGenerator />
      </header>
    </div>
  );
};

export default App;