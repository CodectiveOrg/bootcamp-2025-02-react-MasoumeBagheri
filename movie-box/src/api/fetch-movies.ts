import type { FiltersType } from "../types/filters.type";
import type { MovieType } from "../types/movie.type";

export async function fetchMovies(filters: FiltersType): Promise<MovieType[]> {
  const response = await fetch(generateUrl(filters));
  const data = await response.json();
  return data.results;
}

function generateUrl(filters: FiltersType): string {
  const params = generateParams(filters);
  return `${import.meta.env.VITE_API_BASE_URL}/search/movie?${params}`;
}

function generateParams(filters: FiltersType): string {
  const params = new URLSearchParams();

  filters.genres.forEach((genre) =>
    params.append("genre", genre.id.toString())
  );

  return params.toString();
}
