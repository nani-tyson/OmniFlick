import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[55vh] w-[280px] m-4 rounded-2xl overflow-hidden relative bg-cover bg-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      {/* Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Movie Title */}
      <div className="absolute bottom-0 w-full text-lg font-semibold tracking-wide text-center text-white p-3 bg-black/50 backdrop-blur-sm">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
