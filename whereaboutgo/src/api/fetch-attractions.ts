import { Attraction } from "../types/attraction.type";
import { Filters } from "../types/filters.type";

export async function fetchAttractions(
  filters: Filters
): Promise<Attraction[]> {
  const params = new URLSearchParams();

  filters.tags.forEach((tag) => params.append("tag", tag.id.toString()));

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/attraction?${params.toString()}`
  );

  return await response.json();
}
