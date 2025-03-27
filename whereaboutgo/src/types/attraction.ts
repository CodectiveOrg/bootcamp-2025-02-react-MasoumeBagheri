import { AttractionTag } from "./attraction-tag";

export type Attraction = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  averageRating: number;
  reviewsCount: number;
  ratingCount: number;
  tags: AttractionTag[];
  phone: string;
};
