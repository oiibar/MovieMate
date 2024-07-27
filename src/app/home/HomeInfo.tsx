import Button from "@/components/common/Button";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

interface HomeInfoProps {
  item: Movie;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${item.poster_path}`;

  return (
    <section>
      <div className="container bg-transparent pb-28 pt-48 flex gap-8 items-center justify-center">
        <div className="flex flex-col gap-8 max-w-lg">
          <h2 className="text-5xl font-bold">{item.title}</h2>
          <p className="text-sm">{item.overview}</p>
          <div className="flex gap-2">
            <Button text="Watch Now" variant="glowing" />
            <Button text="Watch Trailer" variant="default" />
          </div>
        </div>
        <div>
          <img src={imageUrl} alt={item.title} className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
