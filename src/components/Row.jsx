import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const slideLeft = () => {
    const slide = document.getElementById("slider" + rowID);
    slide.scrollLeft = slide.scrollLeft - 500;
  };
  const slideRight = () => {
    const slide = document.getElementById("slider" + rowID);
    slide.scrollLeft = slide.scrollLeft + 500;
  };
  useEffect(() => {
    axios.get(fetchURL).then((responce) => {
      setMovies(responce.data.results);
    });
  }, [fetchURL]);
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10 "
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative"
        >
          {movies.map((items, id) => (
            <Movie items={items} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10 "
        />
      </div>
    </div>
  );
};

export default Row;
