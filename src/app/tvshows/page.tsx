"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTopRatedTVShows } from "@/hooks/useTVShows";
import { TVShow } from "@/api/types";

const MovieListItem = React.lazy(
  () => import("@/components/movies/MovieListItem")
);

const Series: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tvshows/${encodeURIComponent(query.trim())}`);
    }
  };

  const { isLoading, data, error } = useTopRatedTVShows();

  if (isLoading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

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
            <Button text="Search" variant="glowing" />
          </form>
          <div className="flex justify-between flex-wrap gap-4">
            {data &&
              data.map((tv: TVShow) => (
                <MovieListItem
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  posterPath={tv.poster_path}
                  type="tvshows"
                />
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Series;
