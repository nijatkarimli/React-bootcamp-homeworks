import React from 'react';
import './App.css';
import movies from './movies';

import MovieTable from './components/MovieTable.js'


function App() {
  return (
    <div className="container">
      <h1>Film Listesi</h1>
      <div>
          <MovieTable movies = {movies}/>
      </div>
    </div>
  );
}

export default App;
