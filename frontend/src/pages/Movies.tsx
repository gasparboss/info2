import { useEffect, useState } from "react";
import type MovieType from "../types/movie";
import { getAllMovies } from "../service/movie";
import Movie from "../components/Movie";

export default function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    (async () => {
      setMovies(await getAllMovies());
    })();
  }, []);

  return (
    <>
      <header>
        <h1>Filmek listája:</h1>
        <input type="search" name="" id="" placeholder="Film címe..." />
        <h3>Kedvenc filmek száma: {0}</h3>
      </header>
      <div className="movies">
        {movies.length &&
          movies.map(({ year, genre, description, rating, title }, index) => (
            <Movie
              key={index}
              year={year}
              genre={genre}
              description={description}
              rating={rating}
              title={title}
            />
          ))}
      </div>
    </>
  );
}
