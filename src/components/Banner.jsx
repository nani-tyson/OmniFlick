import React from "react";

function Banner({ poster_path, name }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        }}
      ></div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

      {/* Movie Title */}
      <div className="absolute bottom-10 left-5 right-5 flex justify-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-lg animate-fadeIn">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default Banner;
