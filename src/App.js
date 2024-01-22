import React from 'react';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteGenerator />
      </header>
    </div>
  );
};

export default App;