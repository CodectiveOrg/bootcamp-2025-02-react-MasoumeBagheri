import { useMemo } from "react";

import { Link } from "react-router";

import useGenres from "../../queries/use-genres";

import type { MovieListItemType } from "../../types/movie-list-item.type";

import FluentEmojiStar from "../../icons/FluentEmojiStar";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieListItemType;
};

export const MovieListItem: React.FC<Props> = ({ movie }) => {
  const { data: allGenres } = useGenres();

  const movieGenres = useMemo(() => {
    if (!allGenres) {
      return [];
    }

    return allGenres.filter((x) => movie.genre_ids.includes(x.id));
  }, [allGenres, movie.genre_ids]);

  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        <img
          className={styles.thumbnail}
          src={`${import.meta.env.VITE_CDN_BASE_URL}/${""}`}
          alt=""
        />
      </div>
      <div className={styles.writings}>
        <Link to={`/movie/${movie.id}`} className={styles.title}>
          {movie.title}
        </Link>
        <div className={styles.ratings}>
          <FluentEmojiStar />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </div>
      <ul className={styles.genres}>
        {movieGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </li>
  );
};
