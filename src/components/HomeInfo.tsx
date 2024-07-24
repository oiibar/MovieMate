"use client";
import React from "react";
import Button from "./common/Button";
// Define the Movie type
interface Movie {
  name: string;
  details: string;
  description: string;
}

// Define the HomeInfo component props
interface HomeInfoProps {
  movie: Movie;
}

// Use the defined type for props
const HomeInfo: React.FC<HomeInfoProps> = ({ movie }) => {
  return (
    <section>
      <div className="container bg-transparent py-32 flex items-center justify-center ">
        <div className="flex flex-col gap-8 max-w-lg">
          <h2 className="text-6xl font-bold">{movie.name}</h2>
          <div>{movie.details}</div>
          <p className="text-sm">{movie.description}</p>
          <div className="flex gap-2">
            <Button text="Watch Now" variant="glowing" />
            <Button text="Watch Trailer" variant="default" />
          </div>
        </div>
        <div className="bg-orange rounded-2xl w-80 h-96"></div>
      </div>
    </section>
  );
};

export default HomeInfo;
