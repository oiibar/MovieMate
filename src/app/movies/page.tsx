import Button from "@/components/common/Button";
import MovieListItem from "@/components/MovieListItem";
import Input from "@/components/common/Input"; // Import the new Input component

export default function Movies() {
  return (
    <main className="">
      <div className="container flex flex-col py-8">
        <section className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-bold">Movies</h1>
          <form className="flex gap-1">
            <Input placeholder="Enter keywords" />
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
          </div>
        </section>
      </div>
    </main>
  );
}
