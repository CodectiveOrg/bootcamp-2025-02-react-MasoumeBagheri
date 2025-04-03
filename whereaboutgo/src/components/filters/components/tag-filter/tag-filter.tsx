import { useState } from "react";

import { tags } from "../../../../data/tags";

import styles from "./tag-filter.module.css";

export const TagFilter: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const toggleTag = (id: number): void => {
    setSelectedTags((old) =>
      old.includes(id) ? old.filter((tagId) => tagId !== id) : [...old, id]
    );
  };

  return (
    <div className={styles["tag-filter"]}>
      <div className={styles.title}> برچسب</div>
      <div className={styles.tag}>
        {tags.map((tag) => (
          <label key={`tag-${tag.id}`}>
            <input
              type="checkbox"
              value={tag.id}
              checked={selectedTags.includes(tag.id)}
              onChange={() => toggleTag(tag.id)}
            ></input>
            {tag.title}
          </label>
        ))}
      </div>
    </div>
  );
};
