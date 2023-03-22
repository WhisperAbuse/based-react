import { PropsWithChildren, useMemo, useState } from "react";
import ThemeContext, { Theme, ThemeContextProps } from "./ThemeContext";

interface ThemeProviderProps {}

const defaultTheme = localStorage.getItem("theme") || Theme.LIGHT;

const ThemeProvider = ({ children }: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState(defaultTheme);

  const value: ThemeContextProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
