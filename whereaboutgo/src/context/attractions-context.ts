import { createContext } from "react";

import { Attraction } from "../types/attraction.type";

type AttractionsContextValue = {
  filteredAttractions: Attraction[];
};

export const AttractionsContext = createContext<AttractionsContextValue>({
  filteredAttractions: [],
});
