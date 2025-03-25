import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WatchlistDisplay from "./WatchlistDisplay";

function WatchList() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [wl, setWl] = useState([]); // Watchlist state


  // Add movie to watchlist
  async function addMovie() {
    if (!search.trim()) return;

    let foundMovie = null;
    let page = 1;
    const maxPages = 5; // Limit to avoid excessive API calls

    while (!foundMovie && page <= maxPages) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=f04cfcc9a195305c3c5260e7e7af4c8b&query=${encodeURIComponent(
            search
          )}&page=${page}`
        );

        const movies = response.data.results;

        // Try to find the movie in the current page
        foundMovie = movies.find((m) =>
          m.title.toLowerCase().includes(search.toLowerCase())
        );

        if (foundMovie) {
          if (!wl.some((m) => m.id === foundMovie.id)) {
            setWl((prev) => [...prev, foundMovie]);
          } else {
            alert("Movie already in watchlist!");
          }
        }

        // If no movie found, check next page
        page++;
      } catch (error) {
        console.error("Error fetching movie:", error);
        break; // Stop fetching on error
      }
    }

    if (!foundMovie) {
      alert("Movie not found!");
      return;
    }

    setSearch(""); // Clear input field
  }

  // Remove movie from watchlist
  function delMovie(id) {
    setWl(wl.filter((movie) => movie.id !== id));
  }

  return (
    <div className="flex flex-col items-center mt-6 p-4">
      {/* Search Component */}
      <SearchBar search={search} setSearch={setSearch} addMovie={addMovie} />

      {/* Watchlist Display Component */}
      <WatchlistDisplay watchlist={wl} delMovie={delMovie} />
    </div>
  );
}

export default WatchList;
