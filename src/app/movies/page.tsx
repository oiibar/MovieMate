"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTopRatedMovies } from "@/hooks/useMovies";
import { Movie } from "@/api/types";
import MoviesSearchForm from "./MoviesSearchForm";

const MovieListItem = React.lazy(
  () => import("@/components/movies/MovieListItem")
);

export default function Movies() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };

  const { isLoading, data, error } = useTopRatedMovies();

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
          <h1 className="text-4xl font-bold">Movies</h1>
          <MoviesSearchForm />
          <div className="flex justify-between flex-wrap gap-2">
            {data &&
              data.map((movie: Movie) => (
                <MovieListItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  type="movies"
                />
              ))}
          </div>
          <Button text="View more" variant="default" />
        </section>
      </div>
      <Footer />
    </main>
  );
}
