// src/App.js
import React from 'react';
import SearchBox from './components/SearchBox';
import Analytics from './components/Analytics';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Real-time Search Analytics</h1>
      <SearchBox />
      <Analytics />
    </header>
  </div>
);

export default App;
