import { useQuery } from "@tanstack/react-query";

import { fetchConfiguration } from "../api/fetchConfiguration";

export default function useConfiguration() {
  return useQuery({
    queryKey: ["configuration"],
    queryFn: fetchConfiguration,
    staleTime: Infinity,
  });
}
