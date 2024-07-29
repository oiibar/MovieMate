"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSearchMovies, useTrendingMovies } from "@/hooks/useMovies";
import { Movie } from "@/api/types";

const MovieListItem = React.lazy(
  () => import("@/components/movies/MovieListItem")
);

export default function Movies() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const {
    isLoading: isTopRatedLoading,
    data: topRatedMovies,
    error: topRatedError,
  } = useTrendingMovies();
  const {
    isLoading: isSearchLoading,
    data: searchResults,
    error: searchError,
  } = useSearchMovies(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };

  const isSearching = query.trim() !== "";
  const error = isSearching ? searchError : topRatedError;
  const moviesToDisplay = isSearching ? searchResults?.results : topRatedMovies;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <Header style={{ backgroundImage: `url(${bg.src})` }} />
      <div className="container flex flex-col py-8">
        <section className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-bold">Movies</h1>
          <form className="flex gap-1" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter keywords"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <div className="flex justify-center items-center flex-wrap gap-2">
            {moviesToDisplay ? (
              moviesToDisplay.length > 0 ? (
                moviesToDisplay.map((movie: Movie) => (
                  <MovieListItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    type="movies"
                  />
                ))
              ) : (
                <div className="text-center text-2xl">No movies available.</div>
              )
            ) : (
              <div className="text-center text-2xl">Loading...</div>
            )}
          </div>
          {!isSearching && <Button text="View more" variant="default" />}
        </section>
      </div>
      <Footer />
    </main>
  );
}
