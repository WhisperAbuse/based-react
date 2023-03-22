import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

interface ThemeProviderProps {}

const ThemeProvider = ({ children }: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

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

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return { theme, toggleTheme };
};

export { useTheme, ThemeProvider };
