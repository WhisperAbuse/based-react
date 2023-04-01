import { type FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={cx(cls.Loader, {}, [className])}></div>;
};
