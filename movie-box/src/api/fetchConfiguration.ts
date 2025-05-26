import type { ConfigurationType } from "../types/configuration.type";

export async function fetchConfiguration(): Promise<ConfigurationType> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/configuration`
  );

  return await response.json();
}
