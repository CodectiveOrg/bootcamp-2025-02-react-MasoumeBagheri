import { AttractionTag } from "./attraction-tag.type";

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
  address: string;
  url: string;
  carousel: string[];
  body: string;
};
