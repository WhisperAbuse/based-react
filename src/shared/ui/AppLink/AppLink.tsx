import { type FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './AppLink.module.scss';
import { type LinkProps, Link } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.PRIMARY, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={cx(cls.AppLink, {}, [className, cls[theme]])}
    ></Link>
  );
};
