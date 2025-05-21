import type { GenreType } from "./genre.type";

export type MovieType = {
  id: number;
  title: string;
  genres: GenreType[];
};
