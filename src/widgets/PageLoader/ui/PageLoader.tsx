import { type FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cx(cls.PageLoaderContainer)}>
      <Loader className={cx(cls.PageLoader, {}, [className])} />
    </div>
  );
};
