import React from "react";

const MovieListItem = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="bg-red-500 rounded-2xl w-36 h-52"></div>
      <p>Movie Name</p>
    </div>
  );
};

export default MovieListItem;
