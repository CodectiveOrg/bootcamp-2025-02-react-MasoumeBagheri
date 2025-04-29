import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { AttractionsContext } from "../context/attractions-context";

import { Attraction } from "../types/attraction.type";
import { FiltersContext } from "../context/filters-context";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    []
  );

  const { filters } = useContext(FiltersContext);

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const params = new URLSearchParams();
      filters.tags.forEach((tag) => params.append("tag", tag.id.toString()));

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction?${params.toString()}`
      );

      const data = await response.json();
      console.log(data);

      setFilteredAttractions(data);
    };

    fetchAttractions().then();
  }, [filters]);

  return (
    <AttractionsContext.Provider value={{ filteredAttractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
