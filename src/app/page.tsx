import React, { Suspense } from "react";
import Header from "@/components/movies/layout/Header";
import Footer from "@/components/movies/layout/Footer";
import { fetchTopRatedTVShows, fetchTrendingTVShows } from "@/api/tvShows";
import { fetchTopRatedMovies, fetchTrendingMovies } from "@/api/movies";
import { Movie, TVShow } from "@/api/types";

const MoviesList = React.lazy(() => import("@/components/movies/MoviesList"));
const HomeHeader = React.lazy(() => import("@/components/home/HomeHeader"));

const App: React.FC = async () => {
  const [topRatedMovies, trendingMovies] = await Promise.all([
    fetchTopRatedMovies(),
    fetchTrendingMovies(),
  ]);
  const [topRatedTVShows, trendingTVShows] = await Promise.all([
    fetchTopRatedTVShows(),
    fetchTrendingTVShows(),
  ]);
  return (
    <main>
      <div className="relative overflow-hidden">
        <Header className="absolute top-0 left-0 right-0 z-50 bg-transparent" />
        <HomeHeader trendingMovies={trendingMovies} />
      </div>
      <div className="container py-20 flex flex-col">
        <section className="flex flex-col gap-20">
          <Suspense
            fallback={<div className="text-center text-2xl">Loading...</div>}
          >
            <MoviesList
              listTitle="Top Rated Movies"
              media={topRatedMovies}
              type="movies"
            />
            <MoviesList
              listTitle="Trending Movies"
              media={trendingMovies}
              type="movies"
            />
            <MoviesList
              listTitle="Top Rated TV Shows"
              media={topRatedTVShows}
              type="tvshows"
            />
            <MoviesList
              listTitle="Trending TV Shows"
              media={trendingTVShows}
              type="tvshows"
            />
          </Suspense>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default App;
