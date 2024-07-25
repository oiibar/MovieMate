"use client";
import React from "react";
import Button from "@/components/common/Button";

interface Movie {
  name: string;
  details: string;
  description: string;
}

interface HomeInfoProps {
  test: Movie;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ test }) => {
  return (
    <section>
      <div className="container bg-transparent py-32 flex items-center justify-center ">
        <div className="flex flex-col gap-8 max-w-lg">
          <h2 className="text-6xl font-bold">{test.name}</h2>
          <div>{test.details}</div>
          <p className="text-sm">{test.description}</p>
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
