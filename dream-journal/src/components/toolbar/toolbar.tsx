import { ChangeEvent, useContext } from "react";

import { Button } from "../button";
import { TextInput } from "../text-input";
import { Select } from "../select";

import { ThemeContext } from "../../provider/theme-provider";
import { FiltersContext } from "../../provider/filters-provider";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";

import { Vibe } from "../../types/vibe.type";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { filters, setFilters } = useContext(FiltersContext);

  const changeThemeHandler = (): void => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  const changeVibeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const vibe = e.target.value;

    setFilters((old) => {
      if (vibe === "all") {
        return { ...old, vibe: undefined };
      }

      return { ...old, vibe: vibe as Vibe };
    });
  };

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search dream..."
        suffixIcon={<MingcuteSearchLine className={styles["search-icon"]} />}
      />
      <Select
        value={filters.vibe}
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
        onChange={changeVibeHandler}
      />
      <Button
        shape="square"
        size="small"
        variant="solid"
        onClick={changeThemeHandler}
      >
        {theme === "light" ? <MingcuteMoonStarsLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
};
