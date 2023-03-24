import { FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';

import LightIcon from '@/shared/assets/icons/sunlight_icon.svg';
import DarkIcon from '@/shared/assets/icons/night_shine_icon.svg';
import { Button } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={cx(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
