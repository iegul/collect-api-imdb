import React, { useEffect, useState } from "react";
import { searchById } from "../api/api";
import Card from "./card";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await searchById(movieId);
      if (data && data.success) {
        setMovie(data.result);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Card
      poster={movie.Poster}
      title={movie.Title}
      imdbID={movie.imdbID}
      type={movie.Type}
      onClick={() => console.log("Watch button clicked")}
    />
  );
};

export default MovieDetails;
