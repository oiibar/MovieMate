import HomeInfo from "@/components/HomeInfo";
import MoviesList from "@/components/MoviesList";

export default function Home() {
  return (
    <main>
      <HomeInfo />
      <div className="container py-20 flex flex-col">
        <section className="flex flex-col gap-20">
          <MoviesList />
          <MoviesList />
          <MoviesList />
          <MoviesList />
        </section>
      </div>
    </main>
  );
}
