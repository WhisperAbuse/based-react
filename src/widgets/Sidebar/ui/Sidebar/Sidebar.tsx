import { FC, useState } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cx(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
