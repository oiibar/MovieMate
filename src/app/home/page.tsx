"use client";

import React, { Suspense, useState } from "react";
import HomeInfo from "./HomeInfo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTopRatedMovies, useTrendingMovies } from "@/hooks/useMovies";
import { useTopRatedTVShows, useTrendingTVShows } from "@/hooks/useTVShows";

const MoviesList = React.lazy(() => import("@/components/movies/MoviesList"));

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    data: moviesData = [],
    error: moviesError,
    isLoading: isLoadingMovies,
  } = useTopRatedMovies();
  const {
    data: trendingMoviesData = [],
    error: trendingMoviesError,
    isLoading: isLoadingTrendingMovies,
  } = useTrendingMovies();
  const {
    data: topRatedTVData = [],
    error: topRatedTVError,
    isLoading: isLoadingTopRatedTV,
  } = useTopRatedTVShows();
  const {
    data: trendingTVData = [],
    error: trendingTVError,
    isLoading: isLoadingTrendingTV,
  } = useTrendingTVShows();

  if (
    isLoadingMovies ||
    isLoadingTrendingMovies ||
    isLoadingTopRatedTV ||
    isLoadingTrendingTV
  ) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  if (
    moviesError ||
    trendingMoviesError ||
    topRatedTVError ||
    trendingTVError
  ) {
    const errorMessage =
      moviesError?.message ||
      trendingMoviesError?.message ||
      topRatedTVError?.message ||
      trendingTVError?.message;
    return <div>Error: {errorMessage}</div>;
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
          {trendingMoviesData.map((item) => (
            <div
              key={item.id}
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
          <Suspense
            fallback={
              <div className="text-center text-2xl">Loading movies...</div>
            }
          >
            <MoviesList listTitle="Top Rated Movies" media={moviesData} />
            <MoviesList
              listTitle="Trending Movies"
              media={trendingMoviesData}
            />
            <MoviesList listTitle="Top Rated TV Shows" media={topRatedTVData} />
            <MoviesList listTitle="Trending TV Shows" media={trendingTVData} />
          </Suspense>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
