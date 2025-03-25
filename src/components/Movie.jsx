import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";

function Movie() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bannerMovie, setBannerMovie] = useState(null);
 
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f04cfcc9a195305c3c5260e7e7af4c8b&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
      )
      .then((res) => {
        const fetchedMovies = res.data.results || [];
        setMovies(fetchedMovies);
        console.log(fetchedMovies)
        setLoading(false);
 
        if (!bannerMovie && fetchedMovies.length > 0) {
          const randomIndex = Math.floor(Math.random() * fetchedMovies.length);
          setBannerMovie(fetchedMovies[randomIndex]);
        }
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies.");
        setLoading(false);
      });
  }, [page]);  

  return (
    <>
      {bannerMovie ? (
        <Banner
          key={bannerMovie.id}
          poster_path={bannerMovie.poster_path}
          name={bannerMovie.title}
        />
      ) : (
        <div className="text-center text-gray-500">Loading banner...</div>
      )}
      <div className="p-5">
        <div className="text-2xl font-bold text-center p-4">
          Trending movies
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading movies...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="flex flex-row flex-wrap justify-around">
            {movies.map((mov) => (
              <MovieCard
                key={mov.id}
                poster_path={mov.poster_path}
                name={mov.title}
              />
            ))}
          </div>
        )}

        <Pagination
          page={page}
          ip={() => setPage(page + 1)}
          dp={() => setPage(Math.max(1, page - 1))}
        />
      </div>
    </>
  );
}

export default Movie;
