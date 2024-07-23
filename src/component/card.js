import React from "react";

function Card({ poster, title, imdbID, type, onClick }) {
  return (
    <div className="card  w-96 shadow-xl flex items-center bg-white">
      <figure className="px-10 pt-10">
        <img src={poster} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <p>IMDb ID: {imdbID}</p>

        <p>Type: {type}</p>

        <div className="card-actions">
          <button
            className="btn bg-pink-500 text-white hover:text-pink-500"
            onClick={onClick}
          >
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
