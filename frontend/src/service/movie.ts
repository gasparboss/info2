import type Movie from "../types/movie";
import axios from "axios";

// export async function getAllMovies(): Promise<Movie[]> {
//   try {
//     const url = "/movies.json";

//     const response = await fetch(url, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!response.ok) throw new Error(response.statusText);

//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

const app = axios.create({
  baseURL: "/",
  timeout: 3000,
});

export async function getAllMovies(): Promise<Movie[]> {
  return (await app.get("movies.json")).data;
}
