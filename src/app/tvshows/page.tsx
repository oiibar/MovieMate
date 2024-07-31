"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSearchTVShows, useTopRatedTVShows } from "@/hooks/useTVShows";
import { TVShow } from "@/api/types";

const MovieListItem = React.lazy(
  () => import("@/components/movies/MovieListItem")
);

export default function Series() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const {
    isLoading: isTopRatedLoading,
    data: topRatedTVShows,
    error: topRatedError,
  } = useTopRatedTVShows(page);

  const {
    isLoading: isSearchLoading,
    data: searchResults,
    error: searchError,
  } = useSearchTVShows(query, page);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/series/${encodeURIComponent(query.trim())}`);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const isSearching = query.trim() !== "";
  const error = isSearching ? searchError : topRatedError;
  const tvToDisplay = isSearching ? searchResults?.results : topRatedTVShows;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <Header style={{ backgroundImage: `url(${bg.src})` }} />
      <div className="container flex flex-col py-8">
        <section className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-bold">TV Series</h1>
          <form className="flex gap-1" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter keywords"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {tvToDisplay ? (
              tvToDisplay.length > 0 ? (
                tvToDisplay.map((tv: TVShow) => (
                  <MovieListItem
                    key={tv.id}
                    id={tv.id}
                    title={tv.name}
                    posterPath={tv.poster_path}
                    type="tvshows"
                  />
                ))
              ) : (
                <div className="text-center text-2xl">
                  No TV shows available.
                </div>
              )
            ) : (
              <div className="text-center text-2xl">Loading...</div>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              text="Previous"
              onClick={() => handlePageChange(page - 1)}
            />
            <Button text="Next" onClick={() => handlePageChange(page + 1)} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
