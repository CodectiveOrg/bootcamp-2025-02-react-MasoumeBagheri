import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchMovies } from "../../api/fetch-movies";

import { FiltersContext } from "../../context/filters.context";

import { MovieListItem } from "../movie-list-item";
import { Loading } from "../loading";

import styles from "./movie-list.module.css";

export const MovieList: React.FC = () => {
  const { filters } = useContext(FiltersContext);

  const { data, isPending, isFetching, isError, error } = useQuery({
    queryKey: ["movies", filters],
    queryFn: () => fetchMovies(filters),
    staleTime: 60 * 1000,
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  console.log(data);

  return (
    <ul
      className={styles["movie-list"]}
      style={{ opacity: isFetching ? "0.5" : "1" }}
    >
      {data.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
