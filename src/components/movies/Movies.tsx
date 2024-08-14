// src/components/movies/Movies.tsx
"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import { Movie } from "@/api/types";
import { fetchTrendingMovies, searchMovies } from "@/api/movies";
import MovieListItem from "@/components/movies/MovieListItem";
import Header from "./layout/Header";
import useDebounce from "@/hooks/useDebounce";

interface Props {
  trendingMovies: Movie[];
}

const Movies: React.FC<Props> = ({ trendingMovies }) => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [moviesToDisplay, setMoviesToDisplay] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 300);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (debouncedQuery.trim()) {
          const searchResults = await searchMovies(debouncedQuery, page);
          setMoviesToDisplay(searchResults.results);
        } else {
          const trendingMovies = await fetchTrendingMovies(page);
          setMoviesToDisplay(trendingMovies);
        }
      } catch (err) {
        setError("An error occurred while fetching movies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedQuery, page]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (error) {
    return <div>Error: {error}</div>;
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
            {isLoading ? (
              <div className="text-center text-2xl">Loading...</div>
            ) : moviesToDisplay.length > 0 ? (
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
              <div className="text-center text-2xl">No movies found!</div>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              text="Previous"
              onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
            />
            <Button text="Next" onClick={() => handlePageChange(page + 1)} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Movies;
