"use client"; // This line marks the component as a Client Component

import React, { useState } from "react";
import Button from "@/components/common/Button";
import MovieListItem from "@/components/movies/MovieListItem";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import bg from "@/assets/bg.jpg";

import Header from "@/components/layout/Header";

export default function Movies() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };
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
            <Button text="Search" variant="glowing" />
          </form>
          <div className="flex justify-between flex-wrap gap-4">
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
          </div>
        </section>
      </div>
    </main>
  );
}
