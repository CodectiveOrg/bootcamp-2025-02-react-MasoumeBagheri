import { Attraction } from "../types/attraction.type";

export async function fetchAttractionDetails(id?: string): Promise<Attraction> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`
  );

  return await response.json();
}
