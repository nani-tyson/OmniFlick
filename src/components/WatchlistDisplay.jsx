import React from "react";
import WatchlistItem from "./WatchlistItem";

function WatchlistDisplay({ watchlist, delMovie }) {
  return (
    <div className="mt-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-center text-gray-500">No movies in the watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((movie) => (
            <WatchlistItem key={movie.id} movie={movie} delMovie={delMovie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default WatchlistDisplay;
