import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...restProps
}) => {
  return (
    <button
      className={cx(cls.Button, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
