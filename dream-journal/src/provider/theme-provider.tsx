import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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
    const item = localStorage.getItem("theme");

    if (!item) {
      return "light";
    }

    return item as Theme;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
