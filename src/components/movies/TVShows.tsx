"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import { TVShow } from "@/api/types";
import MovieListItem from "@/components/movies/MovieListItem";
import Header from "./layout/Header";
import { fetchTrendingTVShows, searchTVShows } from "@/api/tvShows";
import useDebounce from "@/hooks/useDebounce";

interface Props {
  trendingTVShows: TVShow[];
}

const Movies: React.FC<Props> = ({ trendingTVShows }) => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [tvShowsToDisplay, setTVShowsToDisplay] = useState<TVShow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 300); // Debounce delay of 300ms
  const router = useRouter();

  useEffect(() => {
    const fetchTVShows = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (debouncedQuery.trim()) {
          const searchResults = await searchTVShows(debouncedQuery, page);
          setTVShowsToDisplay(searchResults.results);
        } else {
          const trendingTVShows = await fetchTrendingTVShows(page);
          setTVShowsToDisplay(trendingTVShows);
        }
      } catch (err) {
        setError("An error occurred while fetching TV shows.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTVShows();
  }, [debouncedQuery, page]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tvshows/${encodeURIComponent(query.trim())}`);
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
          <h1 className="text-4xl font-bold">TV Shows</h1>
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
            ) : tvShowsToDisplay.length > 0 ? (
              tvShowsToDisplay.map((tvShow: TVShow) => (
                <MovieListItem
                  key={tvShow.id}
                  id={tvShow.id}
                  title={tvShow.name}
                  posterPath={tvShow.poster_path}
                  type="tvshows"
                />
              ))
            ) : (
              <div className="text-center text-2xl">No TV shows found!</div>
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
