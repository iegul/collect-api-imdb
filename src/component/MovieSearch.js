import React, { useState } from "react";
import { searchByName } from "../api/api";
import Card from "./card";

const MovieSearch = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async () => {
    const data = await searchByName(query);
    if (data && data.success) {
      setResults(data.result);
      setSearchPerformed(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-48">
      {!searchPerformed && (
        <div className="flex">
          <input
            className="w-96 h-16 bg-pink-200 pl-2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
          />
          <button
            onClick={handleSearch}
            className="bg-pink-400 h-16 w-16 rounded-r-lg text-white font-semibold "
          >
            Search
          </button>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4 mt-8 ">
        {results.map((movie) => (
          <Card
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            imdbID={movie.imdbID}
            type={movie.Type}
            onClick={() => onSelect(movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
