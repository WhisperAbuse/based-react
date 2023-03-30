import { type FC, useState } from 'react';

import cx from '@/shared/lib/classNames';

import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';

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
      <Button className={cx(cls.Toggle)} onClick={onToggle}>
        Toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
