import React, { useState } from "react";
import MovieDetails from "./component/MovieDetails";
import MovieSearch from "./component/MovieSearch";
import "./App.css";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen ">
      <MovieSearch onSelect={setSelectedMovieId} />
      {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
    </div>
  );
}

export default App;
