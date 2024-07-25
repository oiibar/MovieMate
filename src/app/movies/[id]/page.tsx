import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MoviesList from "@/components/movies/MoviesList";
import React from "react";

const MovieDetails = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <main className="">
        <Header />
        <div className="container flex flex-col gap-20 justify-center items-center py-8">
          <section className="flex gap-4 bg-green-600 p-2">
            <div className="bg-orange rounded-2xl w-72 h-80"></div>
            <div className="flex flex-col gap-8 max-w-lg">
              <h2 className="text-6xl font-bold">{params.id}</h2>
              <div>Details</div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                consectetur illo laudantium ratione harum quisquam voluptatum
                inventore, corporis debitis esse. Nulla blanditiis alias
                dignissimos sequi eligendi deserunt nostrum cupiditate minima!
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-20">
            <MoviesList title={"Similar"} />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MovieDetails;
