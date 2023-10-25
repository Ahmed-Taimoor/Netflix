import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ items }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative">
      <img
        src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full font-bold hover:bg-black/80 hover:opacity-100 opacity-0 flex justify-center items-center text-center   text-white">
        <p>{items?.title}</p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
