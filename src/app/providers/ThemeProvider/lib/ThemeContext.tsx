import { createContext, type Dispatch, type SetStateAction } from 'react';

export const THEME_LOCAL_STORAGE_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export default ThemeContext;
