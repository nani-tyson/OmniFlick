import React from "react";

function SearchBar({ search, setSearch, addMovie }) {
  return (
    <div className="flex border border-gray-300 rounded-lg shadow-md">
      <input
        className="w-80 md:w-96 lg:w-[400px] p-3 rounded-l-lg border-r-0 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg m-1"
        type="text"
        value={search}
        placeholder="Search for a movie..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-r-lg 
                   hover:bg-blue-700 transition duration-300"
        onClick={addMovie}
      >
        Add to Watchlist
      </button>
    </div>
  );
}

export default SearchBar;
