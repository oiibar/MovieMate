"use client";
import React, { useState } from "react";
import HomeInfo from "./HomeInfo";
import Header from "@/components/layout/Header";
import MoviesList from "@/components/movies/MoviesList";
import { useTopRatedMovies, useTrendingMovies } from "@/hooks/useMovies";
import Footer from "@/components/layout/Footer";
import { useTopRatedTVShows, useTrendingTVShows } from "@/hooks/useTVShows";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    isLoading: isLoadingMovies,
    data: moviesData = [], // Default to empty array
    error: moviesError,
  } = useTopRatedMovies();
  const {
    isLoading: isLoadingTrendingMovies,
    data: trendingMoviesData = [], // Default to empty array
    error: trendingMoviesError,
  } = useTrendingMovies();
  const {
    isLoading: isLoadingTopRatedTV,
    data: topRatedTVData = [], // Default to empty array
    error: topRatedTVError,
  } = useTopRatedTVShows();
  const {
    isLoading: isLoadingTrendingTV,
    data: trendingTVData = [], // Default to empty array
    error: trendingTVError,
  } = useTrendingTVShows();

  if (
    isLoadingMovies ||
    isLoadingTrendingMovies ||
    isLoadingTopRatedTV ||
    isLoadingTrendingTV
  ) {
    return <div>Loading...</div>;
  }

  if (
    moviesError ||
    trendingMoviesError ||
    topRatedTVError ||
    trendingTVError
  ) {
    return (
      <div>
        Error:{" "}
        {moviesError?.message ||
          trendingMoviesError?.message ||
          topRatedTVError?.message ||
          trendingTVError?.message}
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : trendingMoviesData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < trendingMoviesData.length - 1 ? prevIndex + 1 : 0
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
          {trendingMoviesData.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
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
          disabled={currentIndex === trendingMoviesData.length - 1}
          className="absolute right-0 top-0 bottom-0 w-1/5 h-full bg-transparent flex items-center justify-center"
        >
          <span className="text-white text-2xl"></span>
        </button>
      </div>
      <div className="container py-20 flex flex-col">
        <section className="flex flex-col gap-20">
          <MoviesList listTitle="Top Rated Movies" media={moviesData} />
          <MoviesList listTitle="Trending Movies" media={trendingMoviesData} />
          <MoviesList listTitle="Top Rated TV Shows" media={topRatedTVData} />
          <MoviesList listTitle="Trending TV Shows" media={trendingTVData} />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
