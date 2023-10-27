import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import moviesData from "./components/moviesData";

function App() {
  return (
    <div className="App">
      <h1>Movie Catalog</h1>
      <MovieList movies={moviesData} />
    </div>
  );
}

export default App;
