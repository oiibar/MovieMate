"use client";
import React, { useState } from "react";
import HomeInfo from "./HomeInfo";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

interface HomeHeaderProps {
  trendingMovies: Movie[];
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ trendingMovies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : trendingMovies.length - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < trendingMovies.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div
        className={`relative flex transition-transform duration-500 ease-in-out ${
          trendingMovies.length > 0 ? "md:bg-[#0F0F0F]" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          backgroundColor: trendingMovies.length > 0 ? "bg-[#0F0F0F]" : "",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${trendingMovies[currentIndex]?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {trendingMovies.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10">
              <HomeInfo item={item} />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute cursor-pointer left-0 top-0 bottom-0 w-1/5 h-full bg-transparent flex items-center justify-center"
      >
        <span className="text-white text-2xl"></span>
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex === trendingMovies.length - 1}
        className="absolute right-0 top-0 bottom-0 w-1/5 h-full bg-transparent flex items-center justify-center"
      >
        <span className="text-white text-2xl"></span>
      </button>
    </>
  );
};

export default HomeHeader;
