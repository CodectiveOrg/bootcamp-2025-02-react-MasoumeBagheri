import { useContext } from "react";

import { Button } from "../button";
import { TextInput } from "../text-input";
import { Select } from "../select";

import { ThemeContext } from "../../provider/theme-provider";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

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
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
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
