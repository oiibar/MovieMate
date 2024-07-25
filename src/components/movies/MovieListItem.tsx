import React from "react";

const MovieListItem = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center group p-4 rounded-lg">
      <div className="bg-orange rounded-2xl w-36 h-52"></div>
      <p className="group-hover:text-orange transition-colors duration-150">
        Movie Name
      </p>
    </div>
  );
};

export default MovieListItem;
