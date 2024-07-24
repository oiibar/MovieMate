import React from "react";
import Button from "./common/Button";

const HomeInfo = () => {
  return (
    <section className="bg-transparent container py-24 flex gap-16 items-center">
      <div className="flex flex-col gap-8 max-w-lg">
        <h2 className="text-6xl font-bold">Venom</h2>
        <div>Details</div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          consectetur illo laudantium ratione harum quisquam voluptatum
          inventore, corporis debitis esse. Nulla blanditiis alias dignissimos
          sequi eligendi deserunt nostrum cupiditate minima!
        </p>
        <div className="flex gap-2">
          <Button text="Watch Now" variant="glowing" />
          <Button text="Watch Trailer" variant="default" />
        </div>
      </div>
      <div className="bg-orange rounded-2xl w-80 h-96"></div>
    </section>
  );
};

export default HomeInfo;
