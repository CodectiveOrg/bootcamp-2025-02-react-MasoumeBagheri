import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { MovieDetails } from "../../components/movie-details";

import { fetchMovie } from "../../api/fetch-movie";

import styles from "./movie.module.css";

export default function MoviePage() {
  const { id } = useParams();

  const { data: movie, isFetching } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovie(id),
    staleTime: 60 * 1000,
  });

  if (isFetching || !movie) {
    return <>در حال بارگذاری...</>;
  }
  return (
    <div className={styles.Movie}>
      <MovieDetails movie={movie} />
    </div>
  );
}
