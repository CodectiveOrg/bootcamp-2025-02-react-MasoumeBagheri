import { useContext } from "react";

import { FiltersContext } from "../../../../context/filters-context";

import { tags } from "../../../../data/tags";

import styles from "./tag-filter.module.css";

export const TagFilter: React.FC = () => {
  const { filters, toggleTag } = useContext(FiltersContext);

  return (
    <div className={styles["tag-filter"]}>
      <div className={styles.title}> برچسب</div>
      <div className={styles.tag}>
        {tags.map((tag) => (
          <label key={`tag-${tag.id}`}>
            <input
              type="checkbox"
              value={tag.id}
              checked={filters.tags.some((t) => t.id === tag.id)}
              onChange={() => toggleTag(tag)}
            ></input>
            {tag.title}
          </label>
        ))}
      </div>
    </div>
  );
};
