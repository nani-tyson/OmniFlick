import React from "react";

function WatchlistItem({ movie, delMovie }) {
  return (
    <li
      className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg shadow mb-2 
                 transition duration-300 hover:bg-gray-200"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-16 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-600">Release Date: {movie.release_date}</p>
        <p className="text-gray-600">Rating: {movie.vote_average}/10</p>
      </div>
      <button
        onClick={() => delMovie(movie.id)}
        className="bg-red-500 text-white px-3 py-2 rounded-lg 
                   hover:bg-red-700 transition duration-300"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default WatchlistItem;
