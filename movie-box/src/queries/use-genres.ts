import { useQuery } from "@tanstack/react-query";

import { fetchGenresApi } from "../api/fetch-genres";

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenresApi,
    staleTime: Infinity,
  });
}
