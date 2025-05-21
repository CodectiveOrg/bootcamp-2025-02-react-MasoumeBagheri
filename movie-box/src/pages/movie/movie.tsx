import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

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

  return <div className={styles.Movie}>{movie.title}</div>;
}
