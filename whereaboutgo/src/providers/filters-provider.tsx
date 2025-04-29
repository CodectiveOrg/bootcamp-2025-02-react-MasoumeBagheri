import { PropsWithChildren, ReactElement, useState } from "react";

import { FiltersContext } from "../context/filters-context";

import { AttractionTag } from "../types/attraction-tag.type";
import { Filters } from "../types/filters.type";

type Props = PropsWithChildren;

function FiltersProvider({ children }: Props): ReactElement {
  // const [filters, setFilters] = useState<number[]>([]);

  // const toggleTag = (id: number): void => {
  //   setFilters((old) =>
  //     old.includes(id) ? old.filter((tagId) => tagId !== id) : [...old, id]
  //   );
  // };
  const [filters, setFilters] = useState<Filters>({ tags: [] });

  const toggleTag = (tag: AttractionTag): void => {
    setFilters((old) => {
      const isSelectedTag = old.tags.some((t) => t.id === tag.id);

      return {
        ...old,
        tags: isSelectedTag
          ? old.tags.filter((t) => t.id !== tag.id)
          : [...old.tags, tag],
      };
    });
  };
  return (
    <FiltersContext.Provider value={{ filters, toggleTag }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
