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
  const router = useRouter();

  const {
    isLoading: isTopRatedLoading,
    data: topRatedTVShows,
    error: topRatedError,
  } = useTopRatedTVShows();
  const {
    isLoading: isSearchLoading,
    data: searchResults,
    error: searchError,
  } = useSearchTVShows(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
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
                <div className="text-center text-2xl">No movies available.</div>
              )
            ) : (
              <div className="text-center text-2xl">Loading...</div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
