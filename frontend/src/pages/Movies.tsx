import { useEffect, useMemo, useState } from "react";
import type MovieType from "../types/movie";
import { getAllMovies } from "../service/movie";
import Movie from "../components/Movie";

export default function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [favorites, setFavorites] = useState<MovieType[]>([]);
  const [searched, setSearched] = useState<string>("");

  useEffect(() => {
    (async () => {
      setMovies(await getAllMovies());
    })();
  }, []);

  const searchableMovies = useMemo(() => {
    if (!searched) return movies;

    return (
      movies.filter((item) =>
        item.title.toLowerCase().includes(searched.toLowerCase().trim()),
      ) ?? []
    );
  }, [movies, searched]);

  const handleFavorites = (item: MovieType) => {
    if (!favorites.find((movie) => movie.id === item.id)) {
      setFavorites((prev) => [...prev, item]);
    }
  };

  return (
    <>
      <header>
        <h1>Filmek listája:</h1>
        <input
          type="search"
          value={searched}
          name=""
          id=""
          placeholder="Film címe..."
          autoFocus
          onChange={(e) => setSearched(e.target.value)}
        />
        <h3>Kedvenc filmek száma: {favorites.length}</h3>
      </header>
      <div className="movies">
        {searchableMovies.length &&
          searchableMovies.map((item, index) => (
            <Movie
              key={index}
              {...item}
              onClick={() => handleFavorites(item)}
            />
          ))}
      </div>
    </>
  );
}
