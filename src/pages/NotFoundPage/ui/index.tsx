import { type FC } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={cx(cls.NotFoundPage, {}, [className])}>
      <p>404 | Page not found</p>
    </div>
  );
};

export default NotFoundPage;
