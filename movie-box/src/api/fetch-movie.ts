import type { MovieType } from "../types/movie.type";

export async function fetchMovie(id?: string): Promise<MovieType> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movie/${id}`
  );

  return await response.json();
}
