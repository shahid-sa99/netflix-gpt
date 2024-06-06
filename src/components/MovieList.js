import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const MovieList = ({ title, moviesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const itemWidth = 230;
  const containerWidth = window.innerWidth;

  useEffect(() => {
    const visibleItemsCount = Math.floor(containerWidth / itemWidth);
    setMaxIndex(moviesData.length - visibleItemsCount);
  }, [containerWidth, moviesData]);

  const itemsToMove = 5;

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsToMove, maxIndex));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToMove, 0));
  };
  return (
    <div className="flex flex-col p-4 bg-black relative overflow-hidden ">
      <div className="flex flex-row font-bold text-2xl cursor-pointer text-white ">
        <span>{title} </span>
        <span>
          <IoIosArrowForward style={{ marginTop: "6px" }} />
        </span>
      </div>
      <div
        className="flex flex-row gap-2  py-3 w-full  transition-transform ease-in-out duration-200"
        style={{
          scrollbarWidth: "none",
          transform: `translateX(-${currentIndex * itemWidth}px)`,
        }}
      >
        {moviesData.map((movie) => {
          return (
            <div
              key={movie.id}
              className="min-w-[230px] relative z-[1]  hover:z-[2]"
            >
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>

      {currentIndex > 0 && (
        <div
          className="absolute left-0 cursor-pointer py-24 z-[999] text-white"
          onClick={handlePrevClick}
        >
          <FaChevronLeft size={30} />
        </div>
      )}
      {currentIndex < maxIndex && (
        <div
          onClick={handleNextClick}
          className="absolute right-0  cursor-pointer py-24 z-[999] text-white"
        >
          <FaChevronRight size={30} />
        </div>
      )}
    </div>
  );
};

export default MovieList;
