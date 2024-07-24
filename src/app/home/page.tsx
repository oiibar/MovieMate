"use client";
import React, { useState } from "react";
import HomeInfo from "@/components/HomeInfo";
import Header from "@/components/layout/Header";
import MoviesList from "@/components/movies/MoviesList";
import bg from "@/assets/bg.jpg";

const movies = [
  {
    name: "Venom",
    details: "Details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur illo laudantium ratione harum quisquam voluptatuminventore, corporis debitis esse. Nulla blanditiis alias dignissimos sequi eligendi deserunt nostrum cupiditate minima!",
  },
  {
    name: "Shrek",
    details: "Details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur illo laudantium ratione harum quisquam voluptatuminventore, corporis debitis esse. Nulla blanditiis alias dignissimos sequi eligendi deserunt nostrum cupiditate minima!",
  },
  {
    name: "Cars",
    details: "Details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur illo laudantium ratione harum quisquam voluptatuminventore, corporis debitis esse. Nulla blanditiis alias dignissimos sequi eligendi deserunt nostrum cupiditate minima!",
  },
];

const Layout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movies.length - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movies.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <main>
      <div className="relative overflow-hidden">
        <Header className="absolute top-0 left-0 right-0 z-50 bg-transparent" />
        <div
          className="relative flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full bg-cover bg-center bg-no-repeat py-8"
              style={{ backgroundImage: `url(${bg.src})` }}
            >
              <HomeInfo movie={movie} />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-0 bottom-0 w-1/5 h-full bg-transparent"
        ></button>
        <button
          onClick={handleNext}
          disabled={currentIndex === movies.length - 1}
          className="absolute right-0 top-0 bottom-0 w-1/5 h-full bg-transparent"
        ></button>
      </div>
      <div className="container py-20 flex flex-col">
        <section className="flex flex-col gap-20">
          <MoviesList title="Trending movies" />
          <MoviesList title="Top Rated" />
          <MoviesList title="Upcoming Releases" />
          <MoviesList title="Popular" />
        </section>
      </div>
    </main>
  );
};

export default Layout;
