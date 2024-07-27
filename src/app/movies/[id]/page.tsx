// app/movies/[id]/page.tsx

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MoviesList from "@/components/movies/MoviesList";

const MovieDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <main>
      <Header />
      <div className="container flex flex-col gap-20 justify-center items-center py-8">
        <section className="flex gap-4 bg-green-600 p-2">
          <div className="bg-orange rounded-2xl w-72 h-80"></div>
          <div className="flex flex-col gap-8 max-w-lg">
            <h2 className="text-6xl font-bold">{params.id}</h2>
            <div>Details</div>
            <p className="text-sm">
              {/* Replace with actual movie details */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-20">
          <MoviesList listTitle="Top Rated Movies" />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default MovieDetails;
