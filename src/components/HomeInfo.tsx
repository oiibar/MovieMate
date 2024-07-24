import React from "react";

const HomeInfo = () => {
  return (
    <section className="bg-blue-500 container py-24 flex gap-16 items-center">
      <div className="flex flex-col gap-4">
        <h2>Title</h2>
        <p>Description</p>
        <div>
          <button>Watch Now</button>
          <button>Watch trailer </button>
        </div>
      </div>
      <div className="bg-red-500 rounded-2xl w-80 h-96"></div>
    </section>
  );
};

export default HomeInfo;
