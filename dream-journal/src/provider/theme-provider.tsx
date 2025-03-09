import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { THEME_LOCAL_STORAGE_KEY } from "../constants/local-storage.keys";

import { Theme } from "../types/theme.type";

type ThemeContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

type Props = PropsWithChildren;

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const item = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

    return item === "light" || item === "dark" ? item : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
