import { type FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  return (
    <div className={cx(cls.PageError, {}, [className])}>
      Application error: a client-side exception has occured
    </div>
  );
};
