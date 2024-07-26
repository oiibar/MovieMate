"use client";
import React, { useState, useEffect } from "react";
import HomeInfo from "./HomeInfo";
import Header from "@/components/layout/Header";
import MoviesList from "@/components/movies/MoviesList";
import bg from "@/assets/bg.jpg";
import { useTopRatedMovies } from "@/hooks/useMovies";
import Footer from "@/components/layout/Footer";
import { Movie } from "@/api/types";

const tests = [
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

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoading, data, error } = useTopRatedMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : tests.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < tests.length - 1 ? prevIndex + 1 : 0
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
          {tests.map((test, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full bg-cover bg-center bg-no-repeat py-8"
              style={{ backgroundImage: `url(${bg.src})` }}
            >
              <HomeInfo test={test} />
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
          disabled={currentIndex === tests.length - 1}
          className="absolute right-0 top-0 bottom-0 w-1/5 h-full bg-transparent"
        ></button>
      </div>
      <div className="container py-20 flex flex-col">
        <section className="flex flex-col gap-20">
          <MoviesList listTitle="Top Rated Movies" movies={data?.results} />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
