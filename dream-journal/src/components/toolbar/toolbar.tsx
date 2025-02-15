import { Dispatch, SetStateAction } from "react";

import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { TextInput } from "../text-input";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";

import { Theme } from "../../types/theme";

import styles from "./toolbar.module.css";

type Props = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const Toolbar: React.FC<Props> = ({ theme, setTheme }) => {
  const changeThemeHandler = (): void => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search dream..."
        suffixIcon={<MingcuteSearchLine className={styles["search-icon"]} />}
      />
      <DreamFilter />
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
